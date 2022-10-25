//Imports from packages
const express = require('express');
const mongoose = require('mongoose');
const DB  = 'mongodb+srv://bhuvaneswari:Preddy14092020@cluster0.y0cwas1.mongodb.net/?retryWrites=true&w=majority';
//Imports from other files
//we need auth .js file so we are importing the files
const authRouter  = require(
"./routes/auth"
);


//To check the listening or not

//INIT
const  PORT = 3000;
const  app = express();
//creating an API
//GET

//middleware(Response to the request and express adds feature to request and response)
//CILENT-> middleware->SERVER(sending data to server)-> CILENT

//Here we have middleware
app.use(express.json());//basically passes incoming request with json payload
app.use(authRouter);
//"0.0.0.0" --> ip address


//connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
  app.listen(PORT,"0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});