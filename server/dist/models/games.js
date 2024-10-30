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
        slug: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        released: { type: DataTypes.STRING },
        background_image: { type: DataTypes.STRING },
        developer: { type: DataTypes.STRING },
        platform: { type: DataTypes.STRING },
        genres: { type: DataTypes.STRING },
        description_raw: { type: DataTypes.TEXT },
        user_id: { type: DataTypes.INTEGER },
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
