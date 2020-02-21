const express = require('express');
  //path is a package to make sure route is correct
  const path = require('path');

//app itself needs to be initialized and we initialize it here and then start using app
const app = express();

const port = 3000;


//express middleware !!!!!!!!!!!!!!!!!!!!!!!!!!!
//express has a method app.use
//middleware intercepts this request before it gets to controlle MVC
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//creating api
//first of all adding characters

// const babyYoda ={
//     name:'Baby Yoda',
//     role:'Adorable',
//     age:50,
//     forcePoint:5000
// };

// const babyDartMaul = {
//     name:'Baby Darth Maul',
//     role:'not so adorable',
//     age:50,
//     forcePoint:'Like, 3'
// };



//arguments here are route and callback
//req and res and not just request and response but express ones (special)


// after the request /babyYoda as a response we will send json 
app.get('/babyYoda',(req,res)=>{
    res.json(babyYoda);
});

// after the request /babyYoda as a response we will send json 
app.get('/babyDarthMaul',(req,res)=>{
    res.json(babyYoda);
    res.sendStatus(200);
});

const characters = [
    {
        //in order to handle what user inputs we add route
        route:'baby-darth-maul',
        name:'Baby Darth Maul',
        role:'not so adorable',
        age:50,
        forcePoint:'Like, 3'
    },
    {   
        route:'baby-yoda',
        name:'Baby Yoda',
        role:'Adorable',
        age:50,
        forcePoint:5000
    }
];
//dynamic routing - creating variable in the routes.
//this says 'I will accept anything after / and will store it in req.params.character'
//so we can access it in req.params.NAME-WE-INPUT
app.get('/api/characters/:character',(req,res)=>{
   console.log(req.params.character);

for (let i=0;i<characters.length;i++){
    if (req.params.character===characters[i].route){
        return res.json(characters[i]);
    }
}
return res.status(404).send('No character!')
});

//posting a character smth / adding new char to the list 

app.post('/api/characters',(req,res)=>{

    //body object is a general object;
const newCharacter = req.body;
console.log(newCharacter);
});

//this one is a get 
//same path as line 78 but GET not POST
app.get('/api/characters',(req,res)=>{
res.json(characters);
});


app.get('/',(req,res)=>{
    // res.send('Welcome to our Star Wars Page')
    // express to send html page - sendfile
    //path is a package to make sure route is correct
    //path will also point to the html related to where we store.
    res.sendFile(path.join(__dirname,'view.html'));


});

app.listen(port, ()=>console.log(`app is running on port:${port}`));



// res.sendFile()