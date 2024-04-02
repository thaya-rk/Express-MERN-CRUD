//load .env 
if (process.env.NODE_ENV !="production"){
    require("dotenv").config();}

//Imports 
const express =require('express')
const connectDB=require('./config/connectDB')
const notesController=require('./controllers/notesController')
const cors=require('cors')

//Create express app
const app=express()
app.use(express.json());
app.use(cors());

//Connect to DB
connectDB();

//Routes-CRUD

//GET method ->> retrieve notes data
app.get("/notes",notesController.fetchNotes)

//GET method ->> retreive not by id
app.get("/notes/:id",notesController.fetchNote)

//POST method to create data
app.post('/notes',notesController.createNote)

//PUT method to update the data  
app.put("/notes/:id",notesController.updateNote)

//DELETE method to delete data
app.delete("/notes/:id",notesController.deleteNote)




//Start Server
app.listen(process.env.PORT)