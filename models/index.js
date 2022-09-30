// import models
const Client = require('./Client');
const Property = require('./Property');
const Owner = require('./Owner');
const Favorite = require('./Favorite');

Property.belongsTo(Owner, {
    foreignKey: 'ownerId',
});
Owner.hasMany(Property, {
    foreignKey: 'ownerId',
    onDelete: 'CASCADE'
});

Client.hasMany(Favorite, {
    foreignKey: 'clientId',
    onDelete: 'CASCADE'
});
Favorite.belongsTo(Client, {
    foreignKey: 'clientId',
});

Favorite.belongsTo(Property, {
    foreignKey: 'propertyId',
});
Property.hasMany(Favorite, {
    foreignKey: 'propertyId',
    onDelete: 'CASCADE'
});
module.exports = {
    Property,
    Client,
    Owner,
    Favorite,
};



