import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface VolunteerAttributes {
  id: number;
  volunteerName: string;
}

interface VolunteerCreationAttributes extends Optional<VolunteerAttributes, 'id'> {}

export class Volunteer extends Model<VolunteerAttributes, VolunteerCreationAttributes> implements VolunteerAttributes {
  public id!: number;
  public volunteerName!: string;  

}

export function VolunteerFactory(sequelize: Sequelize): typeof Volunteer {
  // TODO: Initialize the Volunteer Model
    Volunteer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      volunteerName: {type: DataTypes.STRING},
    },
    {
      sequelize,
      tableName: 'volunteers',
      timestamps: false, // Disable createdAt and updatedAt fields by default
      underscored: true, // Convert table names to underscored_case by default
      paranoid: true, // Add deletedAt field to soft delete records by default
      freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
    }
  );

  return Volunteer;
}

