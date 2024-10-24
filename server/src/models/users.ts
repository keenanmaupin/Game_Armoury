import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface UsersAttributes {
  id: number;
  userName: string;
  password: string;
  email: string;
  gamingEra: string;
}

interface UsersCreationAttributes extends Optional<UsersAttributes, 'id'> {}

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  public id!: number;
  public userName!: string;  
  public password!: string;  
  public email!: string;  
  public gamingEra!: string;  
}

export function UserFactory(sequelize: Sequelize): typeof Users {
    Users.init(
    {
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
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false, // Disable createdAt and updatedAt fields by default
      underscored: true, // Convert table names to underscored_case by default
      paranoid: true, // Add deletedAt field to soft delete records by default
      freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
    }
  );

  return Users;
}
