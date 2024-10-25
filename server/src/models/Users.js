import { DataTypes, Model } from 'sequelize';
export class User extends Model {
}
export function userFactory(sequelize) {
    // TODO: Initialize the Volunteer Model
    User.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gamingEra: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'volunteers',
        timestamps: false, // Disable createdAt and updatedAt fields by default
        underscored: true, // Convert table names to underscored_case by default
        paranoid: true, // Add deletedAt field to soft delete records by default
        freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
    });
    return Volunteer;
}
