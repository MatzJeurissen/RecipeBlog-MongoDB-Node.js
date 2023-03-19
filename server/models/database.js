const mongoose = require('mongoose');
// mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(process.env.DATABASE_URL || "mongodb+srv://matzjeurissen:57rrITI0cxyEi7Nj@cluster0.0ud6m7o.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});


// Models
require('./Category');
require('./Recipe');
// require('./User');