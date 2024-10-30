import { Users } from '../models/index.js';
export const seedUsers = async () => {
    await Users.bulkCreate([
        {
            username: 'Firstplayer',
            password: 'password123',
            email: 'user@example.com',
            gamingEra: 'Nintendo-64 Player'
        },
        {
            username: 'Kenhie',
            password: 'tobiko123',
            email: 'kenhie@example.com',
            gamingEra: 'NES'
        }
    ], { individualHooks: true });
};
