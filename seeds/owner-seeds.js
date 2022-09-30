const { Owner } = require('../models');

const ownerData = [
    {
        'username': 'lorenzo123',
        'password': 'password',
        'firstName': 'Lorenzo',
        'lastName': 'Matterhorn',
        'email': 'awesome123@yahoo.com',
        'phone': '1-215-686-3376',
        'address': '3023 Lincoln Ave',
        'city': 'San Diego',
        // 'zipCode': '13932'

    },
    {
        'username': 'lospollos',
        'password': 'password',
        'firstName': 'Gustavo',
        'lastName': 'Fring',
        'email': 'thegentleone@yahoo.com',
        'phone': '1-833-272-2871 ',
        'address': '2123 Adam Ave',
        'city': 'San Diego',
        // 'zipCode': '92387'
    },
    {
        'username': 'fatmanofjersey',
        'password': 'password',
        'firstName': 'Anthony',
        'lastName': 'Sopranos',
        'email': 'badabing@yahoo.com',
        'phone': '1-604-930-7965',
        'address': '2345 Washington Ave',
        'city': 'San Diego',
        // 'zipCode': '24832'
    },
];

const seedOwners = () => Owner.bulkCreate(ownerData);

module.exports = seedOwners;