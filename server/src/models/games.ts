import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface GamesAttributes {
  id: number;
  name: string;
  description: string;
  releaseDate: number;
  platform: string;
  publisher: string;
  genres: string;
  background_image: string;
}

interface GamesCreationAttributes extends Optional<GamesAttributes, 'id'> {}

export class Games extends Model<GamesAttributes, GamesCreationAttributes> implements GamesAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public releaseDate!: number;
  public platform!: string;
  public publisher!: string;
  public genres!: string;
  public background_image!: string;
}

export function GamesFactory(sequelize: Sequelize): typeof Games {
  Games.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      releaseDate: { type: DataTypes.INTEGER },
      platform: { type: DataTypes.STRING },
      publisher: { type: DataTypes.STRING },
      genres: { type: DataTypes.STRING },
      background_image: { type: DataTypes.STRING },
    },
    {
      sequelize,
      tableName: 'games',
      timestamps: false, // Disable createdAt and updatedAt fields by default
      underscored: true, // Convert table names to underscored_case by default
      paranoid: true, // Add deletedAt field to soft delete records by default
      freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
    }
  );

  return Games;
}
