
use('utilisateurs');



//db.users.insertOne({name: "Chuck Norris",age: 77,hobbies : ["Karate","Kung-fu","Ruling the world"]});

//db.users.find({name: "Chuck Norris"});

//db.users.find({name: "Chuck Norris"},{_id:0});

//db.users.find({age : {$gte: 20, $lte : 25 }});

//db.users.find({$and : [{age : {$gte: 30, $lte : 40 }},{"gender" : "male"}]})

//db.users.find({"address.state" : "Louisiana"});

//db.users.find({}).sort({age : -1}).limit(20);

//db.users.find({$and : [{gender : "female"},{age : 30}]}).count();

//db.users.aggregate([ { $unset: "phone" } ]);

//db.users.updateOne({name : "Chuck Norris"},{$set : {age : "infinity"}});

db.users.updateMany({age : {$gte: 50}},{$push : {hobbies : "Scrabble"}});