import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import { Volunteer } from './users.js';

interface WorkAttributes {
  id: number;
  name: string;
  status: string;
  description: string;
  assignedVolunteerId?: number;
}

interface WorkCreationAttributes extends Optional<WorkAttributes, 'id'> {}

export class Work extends Model<WorkAttributes, WorkCreationAttributes> implements WorkAttributes {
  public id!: number;
  public name!: string;
  public status!: string;
  public description!: string;
  public assignedVolunteerId?: number;
  public assignedVolunteer?: Volunteer;
}

export function WorkFactory(sequelize: Sequelize): typeof Work {
  Work.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING },
      status: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      assignedVolunteerId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: 'work',
      timestamps: false, // Disable createdAt and updatedAt fields by default
      underscored: true, // Convert table names to underscored_case by default
      paranoid: true, // Add deletedAt field to soft delete records by default
      freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
    }
  );

  return Work;
}
