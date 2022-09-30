const { Client } = require('../models');

const clientData = [

    {
        'username': 'client1',
        'password': 'password',
        'firstName': 'Jeese',
        'lastName': 'Pinkman',
        'email': 'wutsupbiatch@yahoo.com',
        'phone': '(+1) 218 023 9876'
    },
    {
        'username': 'client2',
        'password': 'password',
        'firstName': 'Walter',
        'lastName': 'White',
        'email': 'thedangerone@gmail.com',
        'phone': '(+1) 214 813 5671'
    },
    {
        'username': 'client3',
        'password': 'password',
        'firstName': 'Tony',
        'lastName': 'Montana',
        'email': 'mylittlefriend@yahoo.com',
        'phone': '(+1) 218 793 5678'
    },
    {
        'username': 'client4',
        'password': 'password',
        'firstName': 'Johnny',
        'lastName': 'Torrance',
        'email': 'heresjohnny@yahoo.com',
        'phone': '(+1) 267 987 5128'
    },
    {
        'username': 'client5',
        'password': 'password',
        'firstName': 'Sarah',
        'lastName': 'Conor',
        'email': 'illbeback@gamil.com',
        'phone': '(+1) 218 020 9286'
    },

];

const seedClients = () => Client.bulkCreate(clientData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedClients;
