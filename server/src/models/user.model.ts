import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
import logger from '../lib/logger';
import { IUser } from '../@types/user';

export class User extends Model<IUser> implements IUser {
    _id!: number;
    name?: string;
    email?: string;
    password?: string;
    salt?: string;
    role?: number;
    region?: string;
    notice?: boolean;
    deleted_at?: Date;
    updated_at?: Date;
    created_at!: Date;

    static initModel(sequelize: Sequelize.Sequelize): typeof User {
        User.init(
            {
                _id: {
                    autoIncrement: true,
                    type: DataTypes.BIGINT,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                email: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                },
                password: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                salt: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                role: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 0,
                },
                region: {
                    type: DataTypes.STRING(100),
                    allowNull: true,
                },
                notice: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
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
                hooks: {
                    beforeCreate: async (user: User) => {
                        if (user.password) {
                            const salt = await bcrypt.genSalt(10);
                            user.salt = salt;
                            user.password = await bcrypt.hash(user.password, salt);
                        }
                    },
                },
                sequelize,
                tableName: 'users',
                modelName: 'user',
                freezeTableName: true,
                timestamps: false,
                paranoid: false,
                indexes: [
                    {
                        name: 'PRIMARY',
                        unique: true,
                        using: 'BTREE',
                        fields: ['_id'],
                    }
                ],
            }
        );

        return User;
    }

    public authenticate = async (password): Promise<boolean> => {
        const match = await bcrypt.compare(password, this.password);
        logger.log(`[${this.name}] authenticate:`, match);
        return match;
    };

    public setPassword = async password => {
        const salt = await bcrypt.genSalt(10);
        this.salt = salt;
        this.password = await bcrypt.hash(password, salt);
        await this.save();
    };
}
