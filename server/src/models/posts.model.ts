import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import { IPost } from '../@types/post';
import { IFile } from '../@types/file';

export class Post extends Model<IPost> implements IPost {
    _id?: number;
    author_id?: number; // Post, Comment, Message
    author?: string; // Post, Comment, Message
    title?: string; // Post, Comment, Message, Notice
    content?: string; // Post, Comment, Message, Notice
	files?: IFile[]; // Post, Notice
	likes?: number; // Post, Comment
    type?: string;  // Post, Comment, Message, Notice
    reported?: boolean; // Post
	parent_id?: number; // Comment
	receiver_id?: number; // Message

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
                reported: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                    defaultValue: false,
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
