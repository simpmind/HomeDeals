const router = require('express').Router();
const { Owner, Client, Property, Favorite } = require('../../models');

// Routes for CLIENTS ///////////

// Client login
router.get("/client/:id", (req, res) => {
  Client.findOne({
      where: {
        username: req.params.id
      }
    })
    .then(function (dbClient) {
      res.json(dbClient);
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
        phone: req.body.phone,
      },
      {
        where: {
          id: clientId
        }
      }
    )
    .then(function () {
      res.json(clientId);
    });
});

/////////// Routes for OWNERS ///////////

// Owner login
router.get("/owner/:username", (req, res) => {
  Owner.findOne({
      where: {
        username: req.params.username
      }
    })
    .then(function (dbOwner) {
      res.json(dbOwner);
    });
});

// Updating existing owner based on ownerId
router.post("/owner/:id", (req, res) => {
  let ownerId = req.body.ownerId;

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
      },
      {
        where: {
          id: ownerId
        }
      }
    )
    .then(function () {
      res.json(ownerId);
    });
});

/////////// Routes for PROPERTIES ///////////

// Adding a new property
router.post("/", (req, res) => {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
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
    .then(function (dbProperty) {
      res.json(dbProperty);
    });
});

// Updating existing property based on propertyId
router.put("/:id", (req, res) => {
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
    .then(function () {
      res.json(ownerId);
    });
});

// Delete existing property based on propertyId
router.delete("/:id", (req, res) => {
    Property.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (data) {
      res.json(data);
    });
});
module.exports = router;

