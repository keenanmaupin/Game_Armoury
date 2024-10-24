import sequelize from '../config/connection.js';
import { UsersFactory } from './users.js';
import { GameFactory } from './games.js';


const Users = UsersFactory(sequelize);
const Games = GameFactory(sequelize);

Users.haMany(Games, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE'
});
Games.belongsToMany(Users,{
    through: 'users_games',
    foreigney: 'game_id',

})

export { Users, Games};


