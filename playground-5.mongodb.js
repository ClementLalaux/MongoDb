use('info');

db.createCollection('produits');

db.produits.insertOne({
    nom:"Macbook Pro",
    fabriquant:"Apple",
    prix:11435.99,
    options:["Intel Core i5","Retina Display","Long life battery"]
});

db.produits.insertOne({
    nom:"Macbook Air",
    fabriquant:"Apple",
    prix:125794.73,
    ultrabook : true,
    options:["Intel Core i7","SSD","Long life battery"]
});

db.produits.insertOne({
    nom:"Thinkpad X230",
    fabriquant:"Lenovo",
    prix:114358.74,
    ultrabook : true,
    options:["Intel Core i5","SSD","Long life battery"]
});
//db.produits.find();

//db.produits.find().limit(1);

//db.produits.find({fabriquant : "Lenovo"},{"_id" : 1});

//db.produits.find({prix : {$gte : 13723}});

//db.produits.find({ultrabook : true}).limit(1);

//db.produits.find({nom: {$regex : '.*Macbook.*', $options: "i"}});

//db.produits.find({nom: {$regex : '^Macbook', $options: "i"}});

//db.produits.deleteMany({fabriquant : "Apple"});

//let id = db.produits.findOne({nom : "Thinkpad X230"},{"_id" : 1})._id.toString();

//db.produits.deleteOne({_id : new ObjectId(id)});