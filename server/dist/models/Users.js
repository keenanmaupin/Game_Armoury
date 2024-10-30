import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
export class Users extends Model {
    // Hash the password before saving the user
    async setPassword(password) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}
export function UsersFactory(sequelize) {
    Users.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: {
                    msg: 'Username must be alphanumeric.'
                },
                notEmpty: {
                    msg: 'Username cannot be empty.'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Password is required.',
                },
                len: [4, 16],
                notEmpty: {
                    msg: 'Password cannot be empty',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Must be a valid email address.',
                },
            },
        },
        gamingEra: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'users',
        timestamps: false, // Disable createdAt and updatedAt fields by default
        underscored: true, // Convert table names to underscored_case by default
        paranoid: true, // Add deletedAt field to soft delete records by default
        freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
        hooks: {
            beforeCreate: async (user) => {
                await user.setPassword(user.password);
            },
            beforeUpdate: async (user) => {
                await user.setPassword(user.password);
            },
        },
    });
    return Users;
}
