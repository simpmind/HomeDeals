const sequelize = require('../config/connection');
const seedClient = require('./client-seeds');
const seedProperty = require('./property-seeds');
const seedOwner = require('./owner-seeds');
const seedFavorite = require('./favorite-seeds');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedOwner();
  await seedClient();


  await seedProperty();

  await seedFavorite();


 

  process.exit(0);
};

seedAll();
