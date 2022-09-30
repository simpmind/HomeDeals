const router = require('express').Router();
const { Owner, Client, Property, Favorite } = require('../../models');

// Routes for CLIENTS 
  // Client login
  router.post("/client/:id", (req, res) => {
    Client
    .findOne({
        where: {
          username: req.params.id
        }
      })
      .then((clientData) => {
        res.json(clientData);
      });
  });

  router.get("/favorites/:id", (req, res) => {
    Favorite.findAll({
        include: [Property],
        where: {
          clientId: req.params.id
        }
      })
      .then((clientData) => {
        res.json(clientData);
      });
  });

  // Updating existing client based on clientId
  router.post("/client/:id", (req, res) => {
    let clientId = req.body.clientId;

    Client.update(
        {
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone
        },
        {
          where: {
            id: clientId
          }
        }
      )
      .then(() => {
        res.json(clientId);
      });
  });

  // Routes for OWNERS 

  // Owner login
  router.post("/owner/:id", (req, res) => {
    Owner
    .findOne({
        where: {
          username: req.params.id
        }
      })
      .then((ownerData)=> {
        res.json(ownerData);
      });
  });

  // Updating existing owner based on ownerId
  router.put("/owner/:id", (req, res) => {
    let ownerId = req.params.id;
  console.log(req.body);
    Owner.update(
        {
          username: req.body.username,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          city: req.body.city,
          // zipCode: req.body.zipCode,
        },
        {
          where: {
            id: ownerId
          }
        }
      )
      .then(()=> {
        res.json(ownerId);
      });
  });

  // Delete existing owner based on propertyId
  router.delete("/owner/:id", (req, res) => {
    Owner.destroy({
        where: {
          id: req.params.id
        }
      })
      .then((data) => {
        res.json(data);
      });
  });

  //Routes for PROPERTIES

  // Adding a new property
  router.post("/property", function(req, res) {
   Property.create({
        overview: req.body.overview,
        address: req.body.address,
        city: req.body.city,
        zipCode: req.body.zipCode,
        type: req.body.type,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        photo: req.body.photo,
        ownerId: req.body.ownerId
      })
      .then((propertyData) => {
        res.json(propertyData);
      });
  });

  // Updating existing property based on propertyId
  router.post("/property/:id", function(req, res) {
    let ownerId = req.body.ownerId;

    Property.update(
        {
          overview: req.body.overview,
          address: req.body.address,
          city: req.body.city,
          zipCode: req.body.zipCode,
          type: req.body.type,
          price: req.body.price,
          bedrooms: req.body.bedrooms,
          bathrooms: req.body.bathrooms,
          photo: req.body.photo
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(() => {
        res.json(ownerId);
      });
  });

  // Delete existing property based on propertyId
  router.delete("/property/:id", (req, res)=> {
    Property.destroy({
        where: {
          id: req.params.id
        }
      })
      .then((data) => {
        res.json(data);
      });
  });

  //Routes for FAVORITES 
  router.delete("/favorites/:ids", function(req, res) {
    let clientId = req.params.id.split("and")[0];
    let propertyId = req.params.id.split("and")[1];
    Favorite.destroy({
        where: {
          $and: {
            propertyId: propertyId,

            clientId: clientId
          }
        }
      })
      .then((data)=> {
        res.json(data);
      });
  });

  module.exports = router;