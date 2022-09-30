const router = require('express').Router();
const { Owner, Client, Property, Favorite } = require('../models');
const { Op } = require("sequelize");
router.get('/', function (req, res) {
  res.render("index");
});
// Routes for CLIENTS 

// Load landing page for LOGGED CLIENT

router.get("/client/:id", function (req, res) {
  Client.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (clientData) {
      console.log(
        "Serving landing page for client: " +
        clientData.username +
        " with Id:" +
        clientData.id
      );
      res.render("index", {
        client: clientData
      });
    });
});


// Load CLIENT info page based on clientId
router.get("/client/:id/info", function (req, res) {
  Client.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (clientData) {
      Favorite
        .findAll({
          include: [Property],
          where: {
            clientId: req.params.id
          }
        })
        .then(function (favorites) {
          console.log(
            "Serving INFO page for client: " +
            clientData.username +
            " with Id:" +
            clientData.id
          );
          res.render("client", {
            client: clientData,
            favorites: favorites
          });
        });
    });
});

// Load the EDIT page for an client based on clientId
router.get("/client/edit/:id", function (req, res) {
  Client.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (clientData) {
      res.render("clientedit", {
        client: clientData
      });
    });
});

// Routes for OWNERS 

// Load OWNER info page based on ownerId
router.get("/owner/:id", function (req, res) {
  let ownerInfo, ownerProperties;

  // First find the info of the owner
  Owner.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (ownerData) {
      // Then find all properties related to this owner
      ownerInfo = ownerData;
      console.log(
        "Found owner: " + ownerInfo.username + " with Id:" + ownerInfo.id
      );
      Property
        .findAndCountAll({
          where: {
            ownerId: ownerInfo.id
          }
        })
        .then(function (dbProperties) {
          ownerProperties = dbProperties;
          console.log(
            "Found " +
            ownerProperties.count +
            " properties for ownerId:" +
            ownerInfo.id
          );
          res.render("owner", {
            owner: ownerInfo,
            properties: ownerProperties
          });
        });
    });
});

// Load the EDIT page for an owner based on ownerId
router.get("/owner/edit/:id", function (req, res) {
  Owner.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (ownerData) {
      res.render("owneredit", {
        owner: ownerData
      });
    });
});

/////////// Routes for PROPERTIES ///////////

// Load PROPERTY info page based on propertyId
router.get("/property/:id", function (req, res) {
  Property.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (propertyData) {
      console.log("Serving INFO page for property with Id:" + propertyData.id);
      res.render("property", {
        property: propertyData
      });
    });
});

// Load the CREATE page for a new property based on ownerId
router.get("/property/add/:ownerId", function (req, res) {
  Owner.findOne({
    where: {
      id: req.params.ownerId
    }
  })
    .then(function (ownerData) {
      console.log(
        "Serving page to ADD a new property for owner with Id:" + ownerData.id
      );
      res.render("propertyadd", {
        owner: ownerData
      });
    });
});

// Load the EDIT page of a property based on propertyId
router.get("/property/edit/:id", function (req, res) {
  let propertyInfo, ownerInfo;

  Property.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (propertyData) {
      propertyInfo = propertyData;
      Owner
        .findOne({
          where: {
            id: propertyInfo.ownerId
          }
        })
        .then(function (ownerData) {
          ownerInfo = ownerData;
          res.render("propertyedit", {
            property: propertyInfo,
            owner: ownerInfo
          });
        });
    });
});

// Routes for ADMINISTRATOR

// Load admin page
router.get("/admin", function (req, res) {
  Owner
    .findAll({
      include: [Property],
    })
    .then(function(owners) {
      Client.findAll({}).then(function (clients) {
        res.render("admin", {
          allOwners: owners,
          allClients: clients
        });
      });
    });
});

/////////// Routes for SEARCH ///////////

// Load search results page
router.get("/search/:keyword", function (req, res) {
  Property
    .findAll({
      where: {
        [Op.or]: {
          // address: {
          //   [Op.like]: "%" + req.params.keyword + "%"
          // },
          city: {
            [Op.like]: "%" + req.params.keyword + "%"
          },
        }
      }
    })
    .then(function (ownerData) {
      res.render("search", {
        results: ownerData
      });
    });
});

// Load search results page for a LOGGED client
router.get("/search/:keyword/:id", function (req, res) {
  let searchResult, clientInfo;

  Client.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (ownerData) {
      clientInfo = ownerData;

      Property.findAll({
        where: {
          [Op.or]: {
            address: {
              [Op.like]: "%" + req.params.keyword + "%"
            },
            city: {
              [Op.like]: "%" + req.params.keyword + "%"
            },
            overview: {
              [Op.like]: "%" + req.params.keyword + "%"
            },

          }
        }
      })
        .then(function (propertyData) {
          searchResult = propertyData;
          Favorite.findAll({
            include: [Property],
            where: {
              clientId: req.params.id
            }
          })
            .then(function (favorites) {
              res.render("searchclient", {
                results: searchResult,
                client: clientInfo,
                favorites: favorites
              });
              console.log("===================");
              console.log(clientInfo.id);
            });
        });
    });
});

// Routes for OTHER 

// Render 404 page for any unmatched routes
router.get("*", function (req, res) {
  res.render("404");
});
module.exports = router;
