const express = require("express"); 
const parser = require("body-parser"); 
const {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    patchTodo
} = require("./src/controllers");
const cors=require("cors"); 
const mongoose = require("mongoose"); 

try {
    mongoose.connect("mongodb+srv://merng16:UbDGVRqSb7C9zxQG@cluster0.yprwra3.mongodb.net/class?retryWrites=true&w=majority");
}catch (error) {
  console.log("ERROR CATCHED");  
}
mongoose.connection.on("connected",() => {
    console.log("DB CONNECTED");
});

const server = express();

server.use(cors()); 

server.use(parser.json());

server.get("/get-todo",getAllTodos);

server.post("/create-todo",createTodo); 
server.put("/update-todo",updateTodo); 
server.delete("/delete-todo",deleteTodo);  
server.patch("/patch-todo",patchTodo);
server.listen(5000, () => {
    console.log("Server Started on 5000 Port");
});