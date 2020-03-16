const express = require('express');
const bodyParser = require('body-parser')
const {check, validationResult} = require('express-validator')

const app = express();
app.use(bodyParser.json())
//app.use(expressValidator())

const port = 5000;

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

app.post('/submit-review', [check('email').isEmail(), check('message').isLength({min:1})],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        }

        const review = {
            email: req.body.email,
            message: req.body.message
        };

        var dbo = app.locals.db.db("reviewsdb");
        dbo.collection("reviewsdb").insertOne(review, (error, data) => {
            if (error)
                console.log("error")
        })
            //.then(review => res.json(review));
        res.json("SAfasf")
    });

const numOfRows = 1000;
app.get('/reviews', (req, res) => {
    var dbo = app.locals.db.db("reviewsdb");
    dbo.collection("reviewsdb").find({}).sort({_id : -1}).limit(numOfRows).toArray(function(error, result) {
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