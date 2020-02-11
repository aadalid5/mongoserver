let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./routes/routes");
let cors = require('cors');



//mongodb connection
//const url = "mongodb://root:0123456789@127.0.0.1:27017/mydb";
const url ="mongodb://localhost:27017/trial1";
mongoose.connect(url, {useNewUrlParser:true,  useUnifiedTopology: true});

var db = mongoose.connection;

/*db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log("connected!!!!!");
});
*/
if (!db) console.log("Error with db connection");
else console.log("db connected :) !");

//initialise the app
let app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

//routing
//default message 
//app.get('/', (req, res) => res.send('Hello from Express'));
app.use('/api', apiRoutes);

//port listening
const port = process.env.PORT ||  3001;
app.listen(port, ()=>console.log(`Listening on port ${port}`))

