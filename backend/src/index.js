const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
var bodyParser = require('body-parser');


const port = process.env.PORT || 8080;
const mongoURL = process.env.mongoURL || 'mongodb://localhost/db'

const app = new express();
process.on('SIGTERM', ()=>{
    mongoose.disconnect();
    process.exit(0);    
})
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use((req, res, next) => {
    if (mongoose.connection.readyState != 1) {
        mongoose.connect(mongoURL, (err) => {
            console.log(err);
            if (err)
                res.status(500).send('Mongo not connected')
            else
                next()
        })
    } else {
        next()
    }
})
app.use('/api/docs', express.static('../apiDoc'));
app.use('/api', require('./api/index'))
app.listen(port, () => {
    mongoose.connect(mongoURL, (err) => {
        console.log(err);
    })
    console.log("Server running at http://localhost:%d", port);
});

