

// Select the database to use.
use('restaurants');


// db.restaurants.find().limit(4);

db.restaurants.aggregate({$match: {rating : 6}});

db.restaurants.aggregate({$group: {_id: "$type_of_food", count: {$sum:1}}},{$match:{count:{$gt : 10}}})