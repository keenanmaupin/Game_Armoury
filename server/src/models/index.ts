import sequelize from '../config/connection.js';
import { UsersFactory } from './users.js';
import { GamesFactory } from './games.js';

const Users = UsersFactory(sequelize);
const Games = GamesFactory(sequelize);

Users.hasMany(Games, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Games.belongsToMany(Users,{
    through: 'users_games',
    foreignKey: 'gameId',

})

export { Users, Games};


