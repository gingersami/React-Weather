const express = require('express');
const mongoose = require('mongoose');
const app = express();
const City = require('./models/CitySchema')


// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dor:123456@ds125938.mlab.com:25938/weater-react')
    .then(function () {
        console.log('Connected to MONGOD !!');
    }).catch(function (err) {
    console.log('Failed to establish connection with MONGOD !!');
    console.log(err.message);
});


app.post('/weather', (req,res)=>{
    let city = new City({
        name: "test",
        temp: 5,
        icon: "123",
        text: "booboo",
    })
    city.save((err, data)=>{
        res.send(data)
    })
})

app.listen(3001, ()=>{
    console.log('Hello')
})