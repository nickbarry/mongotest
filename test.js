/**
 * Created by Nicholas on 1/6/2016.
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/mongotest', function(err, db){
    console.log('Connected to MongoDB!');

    // using the db connection object, save the collection 'testing' to a separate variable:
    var collection = db.collection('testing');

    // insert new item
    collection.insert({'title': 'Snowcrash'}, function(err, docs){
        console.log(docs.ops.length + ' record inserted.');
        console.log(docs.ops[0]._id + ' - ' + docs.ops[0].title);

        collection.findOne({title: 'Snowcrash'}, function(err, doc){
            console.log(doc._id + ' - ' + doc.title);
            db.close();
        });
    });
});