
const express = require("express");
const app = express();
const mongoose = require('mongoose');
//const person = require("./models/users");
//const trip = require("/models/trips");


mongoose.connect('mongodb+srv://user0:PrVZsRbgCPkb7L8Y@trips.6eqhgof.mongodb.net/?retryWrites=true')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//its going to receive a thing from the request body parser
app.get('/api/SignUp',(req,res)=> {
   console.log(req.body);

   //sign up
  const person = new person({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    
  });
//mongoose has alot of methods
//mongoose.save

//then block returns a response
person.save().then(
() => {
  res.status(201).json({
    message:"post saved successfully!"
  });
}
).catch(
  (error) => {
    res.status(400).json({
      error:error
    });
  }
);
  });

  //after submitting nothing happens
  //next we will "get" what we entered into the database
  

//mongoose allows us to modify things
app.put('/api/stuff/:id', (req, res, next) => {
//we need to create a new thing and 
//update the thing in its position
//but if we create a new thing it will create a new id

const person = new person({
  _id: req.params.id,
   name: req.body.name,
   email: req.body.email,
   password: req.body.password,
   userId: req.body.userId

});
  person.updateOne({_id:req.params.id},thing).then(
    () => {
      res.status(201).json({
        message:'thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  //grab the fields from the req
  );
});

//next middleware with next 
//mongoose allows us to retrieve things
//now we will only intercept all the requests


app.get('/sign-up', (req, res, next) => {
  //leaving the find() empty as we want to retrieve everything from the db
  //then we send a promise to receive an array of all the things if available
  person.find().then(
      (things) => {
        res.status(200).json(things);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error:error
        });
      }
    );
  });

app.get('/TripDetails')
app.find('/TripDetails')
app.find('/sign-in')
app.find('/Points')
app.get('/Emissions')
app.find('//Emissions')
app.find('/History')


module.exports = app;
