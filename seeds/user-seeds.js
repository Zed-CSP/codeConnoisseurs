const User = require('../models/User');

const userData = [
    {
        id: '3590669f-60ec-4de6-a1ab-0662039366aa',
        first_name: 'Beckee',
        last_name: 'Roos',
        email: 'roos@email.com',
        password: 'password12345'
    },
    {
        id: '3593569f-6fec-4de6-a1ab-0662085366aa',
        first_name: 'Chris',
        last_name: 'Peret',
        email: 'peret@email.com',
        password: 'password12345'
    },
    {
        id: '3590669f-60ec-4de6-a1ab-0662085394bb',
        first_name: 'Phuong',
        last_name: 'To',
        email: 'to@email.com',
        password: 'password12345'
    },
    {
        id: '3234569f-60ec-4de6-a1ab-0662085366aa',
        first_name: 'Riley',
        last_name: 'ONeil',
        email: 'oneil@email.com',
        password: 'password12345'
    },
    {
        id: '3590669f-60ec-4de6-a1ab-0662085395aa',
        first_name: 'Sarah',
        last_name: 'Jensen',
        email: 'jensen@email.com',
        password: 'password12345'
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;