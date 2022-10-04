# Home Deals

## Real Estate solution for direct selling Owner-Client 
[Deployed Link]([Link to our heroku here](https://homedeals.herokuapp.com))


[Source Code]([link to our github](https://github.com/simpmind/HomeDeals))

![GitHub License Badge](https://shields.io/badge/license-MIT-green)

> **Created by**
- Duc Dang (https://github.com/simpmind)
- Falris Elbanna (https://github.com/fariselbanna)


## Description

This project is a fully functional and fully mobile responsive site deployed in Heroku. The idea behind this site is to provide owners to post their properties in a place where potential buyers can look for them without the need of a third party (realtor).

The project is based on **node.js** and **express.js**. The back end is backed by a **MySQL Database** and **Sequelize** as the ORM. The aplication has been deployed in **Heroku** using their **JawsDB** database application.

> ## Building tools
- **FRONT END**
    - HTML, CSS
    - Javascript and jQuery
    - Bootstrap

- **BACK END**
    - node.js
    - Express
    - ORM
    - MySQL / JawsDB MySQL
    - Handlebars

- **Deployment**
    - Heroku
*Landing page 
![01](/public/images/landingpage.png)

*Login modal
![02](/public/images/loginmodal.png)

*Client page
![03](/public/images/clientpage.png)

*Owner page - Web*
![04](/public/images/ownerpage.png)

*Site administrator's page - Web*
![05](/public/images/admin.png)

*Owner edit page - Web*xad
![06](/public/images/owneredit.png)

*Property edit page - Web*
![7](/public/images/propertyedit.png)

*Client edit page - Web*
![8](/public/images/clientedit.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Models](#database-models)
- [Associations](#associations)
- [Seeding](#seeding)
- [Credits](#credits)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Test](#test)
- [Code of Conduct](#contributor-covenant-code-of-conduct)
- [License](#license)

## Installation

The appropriate packages consists of

- npm i
- npm init
- npm install mysql2
- npm install doetenv
- npm install exphbs
- npm install connect-session-sequelize
- npm install express
- npm install express-handlebars
- npm install handlebars
- npm install express-session
- npm install jquery-confirm
- npm install nodemon
- npm install prettier
- npm install seed
- npm install sequelize
- npm install eslint
- npm install chai
- npm install mocha


## Database Models

The database models contain the following four models, including the requirements listed for each model:

- `Owner`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `username`

    - String.

    - Doesn't allow null values.
  - `password`

    - String.

    - Doesn't allow null values. 

    - Default Value as `owner`  

  - `firstName`

    - String.

    - Doesn't allow null values.
  
  - `lastName`

    - String.

    - Doesn't allow null values.

  - `email`

    - String.

    - Doesn't allow null values.

  - `phone`

    - String.

    - Doesn't allow null values.

- `Client`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `username`

    - String.

    - Doesn't allow null values.
  - `password`

    - String.

    - Doesn't allow null values. 

    - Default Value as `owner`  

  - `firstName`

    - String.

    - Doesn't allow null values.
  
  - `lastName`

    - String.

    - Doesn't allow null values.

  - `email`

    - String.

    - Doesn't allow null values.

  - `phone`

    - String.

    - Doesn't allow null values.

- `Property`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.

  - `overview`

    - String.

    - Doesn't allow null values.
    
  - `address`

    - String.

    - Does allow null values.

  - `city`

    - String.

    - Does allow null values. 

  - `zipCode`

    - String.

    - Does allow null values.

  - `type`

    - String.

    - Does allow null values. 

    - Default value is blank

  - `price`

    - Decimal.

    - Does allow null values.

  - `bedrooms`

    - String.

    - Does allow null values. 
    
  - `bathrooms`

    - String.

    - Does allow null values.

  - `photo`

    - Text.


  - `onwnerId`

    - Integer

    - References the id in the `onwer` Model.

 
- `User`

  - `id`

    - Integer.

    - Doesn't allow null values.

    - Set as primary key.

    - Uses auto increment.
      
  - `onwnerId`

    - Integer

    - References the id in the `onwer` Model.

  - `propertyId`

    - Integer

    - References the id in the `property` Model.


 Hooks were used before create to hash the password and before an updated password

## Associations

In the index.js file of models directory the associations were created with these methods`hasMany`, `belongsToMany` were used to associate the appropriate tables


## Seeding

-- After running the

```
 npm run seed

```

From the command line the propertydb in mysql workbench was seeded and verified on mysql workbench.




## All operations successful with the use of **GET, POST,PUT, DELETE.


## Credits

Matt Banz - Bootcamp Instructor

Anthony Pillow - Bootcamp TA

## Badges

[![forthebadge](/public/images/approved-by-duc-dang.svg)](https://github.com/simpmind)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/simpmind)



## Acceptance Criteria

- [ √] WWhen I visit the Home Deals site for the first time, I am presented with the homepage, which includes an existing search bar where you can enter the city and zip code along with the filter for price and type of property. On the navigation bar, there are options for clients, owners, or admin to log in.

- [ √] I click on the search button without a query or a nonexistence result and taken to the 404 page.
- [ √] I click on any other links in the navigation, then I am prompted to either sign up or sign in

- [ ] When I choose to sign up I am prompted to create a username and password

- [ √] When I click on the sign-in button my user credentials are saved and I am logged into the site
- [ √] When I revisit the site at a later time and choose to sign in,then I am prompted to enter my username and password

- [ √] When I am signed in to the site, I can see navigation links for the homepage, and the option to log out

- [ √] When I click on the logo option in the navigation, then I am taken to the homepage.

- [ √] When I click on the admin option in the navigation, then I am presented with the account information of clients and owners, I can delete or update their information from their.

- [ √] After signing in as client, I have access to my farorite property and can add property to my favorite list.

- [ √] When owner click on the button to add a property, then I am prompted to enter all information for new property.

- [ ] When owners click on one of their existing property,  then they are able to delete or update their post and taken back to an updated site.

- [ √] When I click on the logout option in the navigation, I am signed out of the site and when I am idle on the page for more than a set time, then I am automatically signed out of the site 

## How to Contribute

Add a comment prior to contribution

## Tests

Chai and Mocha are used to test if all routes work properly 


-- After running the

```
 npm run test

```


## License

![GitHub License Badge](https://shields.io/badge/license-MIT-green)

Copyright (c) [2022] [DUC DANG]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

### Contact:

Github: [https://github.com/simpmind](https://github.com/simpmind)

Email: <tengfai97@gmail.com>
