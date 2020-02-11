// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//routes
app.use('/products', product);


let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// routes/product.route.js
const express = require('express');
const router = express.Router();

// Require the controllers 
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

//Create 
router.post('/create', product_controller.product_create);
//Read
router.get('/:id', product_controller.product_details);
//Update
router.put('/:id/update', product_controller.product_update);
//Delete
router.delete('/:id/delete',product_controller.product_delete);


module.exports = router;


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//controllers/product.controller.js 
const Product = require('../models/product.model');

//Simple version, without validation or sanitation
module.exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


//Create controller
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

//Read controller
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

//Update Controller
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

//Delete Controller
exports.product_delete=function(req, res){
	Product.findbyIdAndRemove(req.params.id, function(err){
		if(err) return next(err);
		res.send("Deleted successfully");			
		})
};



// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//models/product.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});


module.exports = mongoose.model('Product', ProductSchema);
