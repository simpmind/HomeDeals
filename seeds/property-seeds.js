const { Property } = require('../models');

const propertyData = [
    {
        'overview': 'Entertaining Offers From $800,000 to $879,900. You Can Buy This Home with as Little as Zero % Down. But VA Buyers, If You Have a $240K Down Payment you May Be Able to Assume Sellers 2.25% Interest Rate and have a $3400 Mortgage Payment on This Beauty!! Gorgeous 2017 Shea Built Home located in the Blue Strand & Sea Glass Community, Just a Few Blocks from Imperial Beach. Home Boasts Huge Kitchen w/ Tons of Cabinets, Storage & Counter Space, Recess Lighting, Eat-at Island & Stainless Steel Appliances, Open Floor Plan With Greatroom to take in a Theater Style Experience or to Have Friends Over to Watch the Big Game. Ceiling Fan, Whole House Fan, A/C, Tankless Water Heater and Solar. Complete with first-Entry Level Bedroom & Full Bath. Primary Suite w/ Luxury Bath, Dual Vanities, Shower and Separate Soaking Tub + Walk In Closet. Low Maintenance Backyard. Community Features 3 parks w/Playground Structure & BBQ area. Conveniently Located to  Parks, Schools, Shopping & Dining. Minutes from I-5 freeway, Easy Commute to North Island or 32nd St. Naval Base,  Short Bike Ride to Imperial Beach and 20 Minute Drive to Downtown SD',
        'address': '1029 Thermal Ave',
        'city': 'San Diego',
        'zipCode': '92154',
        'type': 'House',
        'price': '$800,000',
        'bedrooms': '4',
        'bathrooms': '3',
        'photo': "https://ap.rdcpix.com/9e960410bedb6d4e5a1d3116990d045fl-m1683835356od-w1024_h768_x2.webp",
        'ownerId': 1

    },
    {
        'overview': '2 Fully Remodeled Houses On 1 Lot! Perfect to live in one unit and rent out the other.  Both houses have their own separate entrances and each has a driveway for 3+ cars for each house.  The front unit is a 2 bedroom/1 bath est. 800sqft with washer/dryer hookups, outdoor area, and no shared walls. Second House is 3bd/1.5bt est. 1,000sqft., its own washer/dryer hookups, private alley access, and outdoor area. Both houses have been upgraded with stainless steel appliances. Rear unit has brand-new kitchen cabinets and quartz countertops. Excellent location directly across from park Under 10 Miles to San Diego Airport, Seaport Village, Downtown Gaslamp, Little Italy, Balboa Park & World Famous San Diego Zoo Easy Access to 15 & 805 Freeways & Ocean View Blvd Located Close to Public Transportation, Parks & Schools Ample Street Parking & Alley Access',
        'address': '3987-89 Franklin Ave',
        'city': 'San Diego',
        'zipCode': '92113',
        'type': 'House',
        'price': '$795000',
        'bedrooms': '5',
        'bathrooms': '3',
        'photo': "https://ap.rdcpix.com/ec18da0fdf81c861e9ec891ab7c56d76l-m1628934197od-w1024_h768_x2.webp",
        'ownerId': 2
    },
    {
        'overview': 'Located on an oversized corner lot with amazing views, this home boasts pride of ownership. Must see it in person to appreciate it.',
        'address': '5204 Topsail Dr',
        'city': 'San Diego',
        'zipCode': 'CA 92154',
        'type': 'Detached',
        'price': '$949,000',
        'bedrooms': '5',
        'bathrooms': '3',
        'photo': "https://ap.rdcpix.com/0c31ed85be5c07d80ab8fc16ea2a29c2l-m1809533864od-w1024_h768_x2.webp",
        'ownerId': 3
    },
    {
        'overview': 'Absolutely stunning, one of a kind, high-end, modern University City home! Completely redesigned/remodeled in 2020,  this home is a must see! Features include: Open living concept optimized by 7 panel LaCantina glass doors creating indoor/outdoor living at its finest! Kitchen has Sub-Zero/Wolf/Bosch appliances. Quartz waterfall island with prep sink, abundant storage, under cabinet lighting. Living room has designer touches vaulted ceilings, fireplace, skylights and ample natural light Family room is adjacent to kitchen and dining area leading out to the backyard. Beautifully hardscaped/landscaped yards with canyon views. Exterior has smooth stucco finish. Primary bedroom has vaulted ceilings and walk-in closet. Luxurious primary bathroom. Wood floors throughout. Upstairs loft. Outdoor deck above the garage',
        'address': '4376 Benhurst Ave',
        'city': 'San Diego',
        'zipCode': 'CA 92122',
        'type': 'House',
        'price': '2,239,000',
        'bedrooms': '4',
        'bathrooms': '3',
        'photo': "https://ap.rdcpix.com/6b1e97905423cd62a1ba608c29c5411el-m3419528774od-w1024_h768_x2.webp",
        'ownerId': 1

    },
    {
        'overview': 'Entertaining Offers From $800,000 to $879,900. You Can Buy This Home with as Little as Zero % Down. But VA Buyers, If You Have a $240K Down Payment you May Be Able to Assume Sellers 2.25% Interest Rate and have a $3400 Mortgage Payment on This Beauty!! Gorgeous 2017 Shea Built Home located in the Blue Strand & Sea Glass Community, Just a Few Blocks from Imperial Beach. Home Boasts Huge Kitchen w/ Tons of Cabinets, Storage & Counter Space, Recess Lighting, Eat-at Island & Stainless Steel Appliances, Open Floor Plan With Greatroom to take in a Theater Style Experience or to Have Friends Over to Watch the Big Game. Ceiling Fan, Whole House Fan, A/C, Tankless Water Heater and Solar. Complete with first-Entry Level Bedroom & Full Bath. Primary Suite w/ Luxury Bath, Dual Vanities, Shower and Separate Soaking Tub + Walk In Closet. Low Maintenance Backyard. Community Features 3 parks w/Playground Structure & BBQ area. Conveniently Located to  Parks, Schools, Shopping & Dining. Minutes from I-5 freeway, Easy Commute to North Island or 32nd St. Naval Base,  Short Bike Ride to Imperial Beach and 20 Minute Drive to Downtown SD',
        'address': '1029 Thermal Ave',
        'city': 'San Diego',
        'zipCode': '92154',
        'type': 'House',
        'price': '$800,000',
        'bedrooms': '4',
        'bathrooms': '3',
        'photo': "https://ap.rdcpix.com/8124a3ca921fe428873caac78ab598adl-m4193043535od-w1024_h768_x2.webp",
        'ownerId': 1
    },

];

const seedProperties = () => Property.bulkCreate(propertyData);

module.exports = seedProperties;