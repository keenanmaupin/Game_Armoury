import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface GamesAttributes {
  id: string;
  slug: string;
  name: string;
  released: string;
  background_image: string;
  developer: string;
  platform: string;
  genres: string;
  description_raw: string;
  userId: number;
}

interface GamesCreationAttributes extends Optional<GamesAttributes, 'id'> {}

export class Games extends Model<GamesAttributes, GamesCreationAttributes> implements GamesAttributes {
  public id!: string;
  public slug!: string;
  public name!: string;
  public released!: string;
  public background_image!: string;
  public developer!: string;
  public platform!: string;
  public genres!: string;
  public description_raw!: string;
  public userId!: number;
}

export function GamesFactory(sequelize: Sequelize): typeof Games {
  Games.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      slug: {type: DataTypes.STRING},
      name: { type: DataTypes.STRING },
      released: { type: DataTypes.INTEGER },
      background_image: { type: DataTypes.STRING },
      developer: { type: DataTypes.STRING },
      platform: { type: DataTypes.STRING },
      genres: { type: DataTypes.STRING },
      description_raw: { type: DataTypes.STRING },
      userId: { type: DataTypes.INTEGER},
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
