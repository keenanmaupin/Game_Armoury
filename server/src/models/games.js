import { DataTypes, Model } from 'sequelize';
export class Games extends Model {
}
export function GamesFactory(sequelize) {
    Games.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        releaseDate: { type: DataTypes.INTEGER },
        console: { type: DataTypes.STRING },
        publisher: { type: DataTypes.STRING },
        genres: { type: DataTypes.STRING },
    }, {
        sequelize,
        tableName: 'games',
        timestamps: false, // Disable createdAt and updatedAt fields by default
        underscored: true, // Convert table names to underscored_case by default
        paranoid: true, // Add deletedAt field to soft delete records by default
        freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
    });
    return Games;
}
