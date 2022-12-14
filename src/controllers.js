const {ToDo} = require("./models.js")

const getAllTodos = async(request,response) => {
    var _id = request.query.id;
    if(_id){
        var allTodos = await ToDo.findById(_id); 
    }else{
        var allTodos= await ToDo.find();
        // var allTodos= await ToDo.find({},{_id:0});
    }
    return response.json(allTodos);        
};
const createTodo = async(request,response) => {
    console.log(request.body);
    await ToDo.create(request.body); 
    return response.json({status : "ToDo Created"});
};

const updateTodo = async ( request, response) => {
    var _id=request.query.id;
    var data= request.body;
    await ToDo.findByIdAndUpdate(_id,data); 
    return response.json({status : "ToDo Updated"});
}
const patchTodo = async ( request, response) => {
    var _id=request.query.id;
    if(_id){
        var data1 = await ToDo.findById(_id); 
    }
    var data= request.body;
    if(data1.isCompleted == true){
        await ToDo.findOneAndUpdate(_id,data);
        return response.json({status : "ToDo Patched"});
    }
    return response.json({status : "ToDo Not Patched"});

}
const deleteTodo = async ( request, response) => {
    var _id=request.query.id;
    await ToDo.findByIdAndDelete(_id);
    return response.json({status : "ToDo Deleted"});
}

module.exports = {getAllTodos,createTodo,updateTodo,deleteTodo,patchTodo};