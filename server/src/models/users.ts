import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface userAttributes {
  id: number;
  userName: string;
  password: string;
  email: string;
  gamingEra: string;
}

interface VolunteerCreationAttributes extends Optional<userAttributes, 'id'> {}

export class User extends Model<userAttributes, VolunteerCreationAttributes> implements userAttributes {
  public id!: number;
  public userName!: string;  
  public password!: string;  
  public email!: string;  
  public gamingEra!: string;  

}

export function userFactory(sequelize: Sequelize): typeof User {
  // TODO: Initialize the Volunteer Model
    User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING,
      },
      password: {
        au
      }
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

