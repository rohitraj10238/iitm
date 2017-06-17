var express = require('express');



var app = express();
console.log("path" ,__dirname);
app.use(express.static(__dirname +'/server'))
app.get('/' , function(req,res){
res.sender('index.html');
});
app.get('/login',function(req,res){

if(req.query.name=="rohit" && req.query.pass=="1234"){
res.jason({
name:'rohit',
phone:'8860675181',
age:25,
des:'Engineer'



})



}
else{
res.send("incorrect Details");

}
})
app.listen(5000,function(){

	console.log(">>>>>server is listening")

});


