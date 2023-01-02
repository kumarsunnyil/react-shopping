const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {
           useUnifiedTopology:true,
           useNewUrlParser:true,
           //useCreateIndex:true, 
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`)

       
        // perform actions on the collection object
    } catch(error ) {
        console.error(`Error: ${error.message}`);
        console.log('Error Thrown')
        process.exit();
    }
}

module.exports = connectDB;