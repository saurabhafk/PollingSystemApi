const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = "mongodb+srv://saurabhsri98:$%40urabh98@cluster1.gtzv0bc.mongodb.net/";

// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose.connect(DB).then(()=>{
    console.log('Connection successful! ✅');
}).catch((err) => console.log("no connection ❌" + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;