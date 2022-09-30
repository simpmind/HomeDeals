const { Favorite } = require('../models');

const favoriteData = [
    {
      
        'clientId': 1,
        'propertyId': 2,

    },
    {
      
        'clientId': 1,
        'propertyId': 1,

    },
    {
      
        'clientId': 1,
        'propertyId': 3,

    },
    {
      
        'clientId': 2,
        'propertyId': 5,

    },
    {
      
        'clientId': 2,
        'propertyId': 1,

    },
    {
      
        'clientId': 3,
        'propertyId': 5,

    },
    {
      
        'clientId': 4,
        'propertyId': 2,

    },
];

const seedFavorite = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorite;