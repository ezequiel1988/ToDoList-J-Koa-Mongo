const mongoose = require("mongoose");
const connectToDB = require('./mongoDB') 
require('dotenv').config();

const connect = async () => {

    try {
        const res = await mongoose.connect(connectToDB.db, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('conectado a mongoDB')
    } catch (err) {
        console.log(err)
    }
};

module.exports = connect