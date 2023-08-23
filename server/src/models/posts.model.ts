import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { IPost } from '../@types/post';
import { IFile } from '../@types/file';

export class Post extends Model<IPost> implements IPost {
    _id?: number;
    author_id?: number;
    author?: string;
	author_role?: number;
    title?: string;
    content?: string;
	files?: IFile[];
	likes?: number;
    type?: string;  // Post, Comment, Message, Notice

	// comments
	parent_id?: number;

	// Messages
	receiver_id?: number;

    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;

    static initModel(sequelize: Sequelize.Sequelize): typeof Post {
        Post.init(
            {
                _id: {
                    autoIncrement: true,
                    type: DataTypes.BIGINT,
                    allowNull: false,
                    primaryKey: true,
                },
                author_id: {
                    type: DataTypes.BIGINT,
                    allowNull: true,
                },
                author: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                author_role: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
                title: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                content: {
                    type: DataTypes.STRING(1024),
                    allowNull: true,
                },
                likes: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                },
                type: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                parent_id: {
                    type: DataTypes.BIGINT,
                    allowNull: true,
                },
                receiver_id: {
                    type: DataTypes.BIGINT,
                    allowNull: true,
                },
                deleted_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
                updated_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
                created_at: {
                    type: DataTypes.DATE,
                    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: 'posts',
                modelName: 'post',
                timestamps: false,
                paranoid: false,
                indexes: [
                    {
                        name: 'PRIMARY',
                        unique: true,
                        using: 'BTREE',
                        fields: ['_id'],
                    },
                ],
            }
        );

        return Post;
    }

}
