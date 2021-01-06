const express = require('express');
const app = new express(); 
const port = process.env.PORT || 5000;
const nav = 

[

    {link:'/books',name:'BOOKS'},
    
    {link:'/authors',name:'AUTHORS'},

    {link:'/signup',name:'SIGN UP'},

    {link:'/login',name:'LOGIN'},

    {link:'/addbook',name:'ADD BOOK'},


];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorRouter = require('./src/routes/authorRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const addbookRouter = require('./src/routes/addbookRoutes')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+ '/src/views')
app.use('/books',booksRouter);
app.use('/authors',authorRouter); 
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/addbook',addbookRouter);


var articles = [
    {
        title: 'Coding for beginer',
        website: 'codeit.com',
        time: '3 Hour ago',
        img: "image1.jpg"
    },
    {
        title: 'Fashion sense in modern society',
        website: 'truth.com',
        time: '2 Hours ago',
        img: "image2.jpg"
    },
    {
        title: 'BlockChain Development',
        website: 'sciencemag.com',
        time: '1 Day ago',
        img: "image3.jpg"
    },
    {
        title: 'The race for AI',
        website: 'freedom.com',
        time: '2 Days ago',
        img: "image4.jpg"
    }
]

app.get('/',function(req,res) 

{

    res.render("index",{

    nav,

    title:'LIBRARY APP',

    articles

}); 

});


app.listen(port, ()=>{console.log("server ready at" + port)});
