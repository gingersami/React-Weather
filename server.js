const express = require('express');
const mongoose = require('mongoose');
const app = express();
const City = require('./models/CitySchema')
var BodyParser = require('body-parser')

app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())


// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dor:123456@ds125938.mlab.com:25938/weater-react')
    .then(function () {
        console.log('Connected to MONGOD !!');
    }).catch(function (err) {
    console.log('Failed to establish connection with MONGOD !!');
    console.log(err.message);
});


app.get('/weather', function (req, res) {
    City.find({}).exec(function (err, data) {
        if (err) { throw err }
        res.send(data);
    });
});

app.post('/weather', (req, res)=>{
    let newCity=new City({
        name:req.body.name,
        comments:req.body.comments
    })
    newCity.save((err,data)=>
    res.send(data)
    )
})

app.delete('/weather/:id', function (req, res) {
    console.log('inside server delete req')
    let id = req.params.id
    console.log(id)
    City.findByIdAndRemove(id, function (err, id) {
        if (err) { throw err }
        res.send(id)
    })
})



app.listen(3001, ()=>{
    console.log('Hello')
})