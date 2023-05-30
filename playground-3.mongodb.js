// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('hopitaux');

// Create a new document in the collection.
// db.getCollection('hopital').insertMany([{
// firstname : "Mohamed",
// lastname : "Deloin",
// age : 30,
// history : [
//     {desease : "rhume",treatment : "sirop"}
// ]},{
//     firstname : "Mohamed",
//     lastname : "Deloin",
//     age : 30,
//     history : [
//         {desease : "rhume",treatment : "sirop"}
//     ]}
// ]);


// db.hopital.update({
//         lastname : "Deloin"
//     },
//     {
//         $set: {
//             age: 32,
//             firstname: "Clement",
//             history : [ {desease : "covid" , treatment : "sirop"} ] 
//         } 
//     });


// db.hopital.find({age: {$gt: 29}}).pretty();

// db.hopital.deleteMany({"history.desease" : "rhume"})