
use('restaurants');

//db.restaurants.aggregate({$limit : 10});

//db.restaurants.aggregate({$sort : {name : 1}},{$limit : 10});

//db.restaurants.aggregate({$match: {borough : "Brooklyn"}},{$limit : 10},{$sort : {name : 1}});

//db.restaurants.aggregate({$project : {name : 1, borough:1, _id:0}},{$limit : 10});

//db.restaurants.aggregate({$project : {address : 0, grades :0}},{$limit : 10});

//db.restaurants.aggregate({$project : {gradeCount : {$size : "$grades"}}},{$sort : {gradeCount : 1}},{$limit : 10});

//db.restaurants.aggregate({$project : {nomEnMaj : {$toUpper : "$name"} , borough :1}},{$limit : 10});

//db.restaurants.aggregate({$project : {nomEnMaj : {$toUpper : "$name"} , debutQuartier : {$substr : ["$borough",0,3]}}},{$limit : 10});

//db.restaurants.aggregate({$count: "Nb restaurants"});

db.restaurants.aggregate({$group: {_id: "$borough", nbRestaurant: {$sum:1}}});