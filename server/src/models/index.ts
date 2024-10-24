import sequelize from '../config/connection.js';
import { VolunteerFactory } from './users.js';
import { WorkFactory } from './games.js';


// TODO: Create a One-to-Many relationship (Volunteer can have numerous volunteer works)


const Volunteer = VolunteerFactory(sequelize);
const Work = WorkFactory(sequelize);



Volunteer.hasMany(Work, {
    foreignKey: 'volunteer_id',
    onDelete: 'CASCADE',
});
Work.belongsToMany(Volunteer,{
    through: 'volunteer_works',
    foreignKey: 'work_id',

})

export { Volunteer, Work};


