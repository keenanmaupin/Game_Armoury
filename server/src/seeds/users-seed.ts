import { Users } from '../models/index.js';

export const seedUsers = async () => {
  await Users.bulkCreate([
    {
      userName: 'FisrtPlayer',
      password: 'password123',
      email: 'user@example.com',
      gamingEra: 'Nintendo-64 Player'
    }, 

  ], { individualHooks: true})
}