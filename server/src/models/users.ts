import { DataTypes, Sequelize, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';

interface UsersAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  gamingEra: string;
}

interface UsersCreationAttributes extends Optional<UsersAttributes, 'id'> {}

export class Users extends Model<UsersAttributes, UsersCreationAttributes> implements UsersAttributes {
  public id!: number;
  public username!: string;  
  public password!: string;  
  public email!: string;  
  public gamingEra!: string; 
  
  // Hash the password before saving the user
  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }
}

export function UsersFactory(sequelize: Sequelize): typeof Users {
    Users.init(
    {
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
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false, // Disable createdAt and updatedAt fields by default
      underscored: true, // Convert table names to underscored_case by default
      paranoid: true, // Add deletedAt field to soft delete records by default
      freezeTableName: true, // Prevent Sequelize from pluralizing table names by default
      hooks: {
        beforeCreate: async (user: Users) => {
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user: Users) => {
          await user.setPassword(user.password);
        },
      },
    }
  );



  return Users;
}
