var users=[
    {"id":"1","name":"Christian Quinde","desc":"Persona joven de 26 años, aficionado a la tecnología", "img":"http://localhost:3000/public/cq.jpg"},
    {"id":"2","name":"Juan Perez","desc":"Persona joven de 27 años, aficionado a la tecnología", "img":"http://localhost:3000/public/jp.jpg"},
    {"id":"3","name":"Andres Llanes","desc":"Persona joven de 28 años, aficionado a la tecnología", "img":"http://localhost:3000/public/al.jpg"},
    {"id":"4","name":"Esteban Carez","desc":"Persona joven de 29 años, aficionado a la tecnología", "img":"http://localhost:3000/public/ec.jpg"},
    {"id":"5","name":"Andy Stockil","desc":"Persona joven de 30 años, aficionado a la tecnología", "img":"http://localhost:3000/public/as.jpg"},
    {"id":"6","name":"Pedro Stichfer","desc":"Persona joven de 31 años, aficionado a la tecnología", "img":"http://localhost:3000/public/ps.jpg"},
    {"id":"7","name":"Raul Sanchez","desc":"Persona joven de 32 años, aficionado a la tecnología", "img":"http://localhost:3000/public/rs.jpg"}
];

exports.getUsers=function(req,res){
    res.send(users);
};
exports.addUser=function(req,res){
    var name= req.body.name;
    var desc= req.body.desc;
    users.push({"name":name, "desc":desc, "img":"http://localhost:3000/public/rs.jpg"})
    res.send(users);
};
exports.updateUser=function(req,res){
    
};
exports.deleteUser=function(req,res){
    var userId= req.param.userId;
    for(var userIndex in users){
        var user= users[userIndex];
        if(user.id===userId){
            users.splice(userIndex,1);
            break;
        }
    }
    res.send(users);
};