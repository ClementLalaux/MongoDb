
use('livres');
//db.livres.find();

//db.livres.aggregate({$match: {authors : "Toru Ishida"}},{$sort : {title : 1,"pages.start" : 1}});

//db.livres.aggregate({$match: {authors : "Toru Ishida"}},{$sort : {title : 1,"pages.start" : 1}},{$project : {title : 1, "pages.start" : 1, "pages.end" : 1}});

//db.livres.aggregate({$match: {authors : "Toru Ishida"}},{$count : "Nb livres"});

db.livres.aggregate({$match : {year : {$gt : 2011}}},{$group : {_id : "$type",count : {$sum :1}}});

//db.livres.aggregate({$unwind : "$authors"},{$group : {_id : "$authors",count : {$sum :1}}},{$sort : {count : -1}});