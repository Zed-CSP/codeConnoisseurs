const seedIngredients = require('./ingredient-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedIngredients();
    console.log('\n ----- INGREDIENTS SEEDED -----\n');

    process.exit(0);
};