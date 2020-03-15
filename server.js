const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
let collection;
MongoClient.connect(url, { promiseLibrary: Promise })
    .catch(err => console.error(err.stack))
    .then(db => {
        //app.locals.db = db;
        app.locals.db = db;
    });

app.listen(port, () => {
    console.log(`Node.js app is listening`);
});

app.post('/submit-review', (req, res, next) => {

    const review = {
        email: req.body.email,
        message: req.body.message
    };

    var dbo = app.locals.db.db("reviewsdb");
    dbo.collection("reviewsdb").insertOne(review, (error,data) => {
        if (error)
            console.log("error")
    });

    res.json("SAfasf")
});

this.numOfRows = 20;
app.get('/reviews', (req, res) => {
    var dbo = app.locals.db.db("reviewsdb");
    dbo.collection("reviewsdb").find({}).sort({$natural: -1}).limit(this.numOfRows).toArray(function(error, result) {
        if (error) throw error;
            console.log("error");
        //db.close();
        res.json(result);
        //res.render('review', {reviews: result})
    });
});

app.post('/search', (req, res, next) => {
    const searchQuery = {email: req.body.search};
    var dbo = app.locals.db.db("reviewsdb");

    dbo.collection("reviewsdb").find(searchQuery).sort({$natural: -1}).toArray(function(error, result) {
        if (error) throw error;
        console.log("error");
        //db.close();
        res.json(result);
        //res.render('review', {reviews: result})
    });
});