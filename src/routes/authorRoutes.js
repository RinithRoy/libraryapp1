const express = require('express');

const authorRouter = express.Router();

function router(nav)

{

var authors = [
    {
        name: 'William Shakespeare',
        books: 'Romeo and Juliet, Julius Ceaser',
        genre: 'Tragedy, History',
        img: "william.jpg"
    },
    {
        name: 'Chetan Bhagat',
        books: '2 states, 5 point someone',
        genre: 'Romance',
        img: "charles.jpg"
    },
    {
        name: 'Dan Brown',
        books: 'The Deception point, The Da Vinci Code',
        genre: 'History, triller',
        img: "henry.jpg"
    }
]

authorRouter.get('/',function(req,res) 

{

    res.render("authors",{nav,
        
    title:'AUTHORS LIST',

    authors

}); 

});

authorRouter.get('/:id',function(req,res)   

	{

	    const id = req.params.id

        res.render("author",{nav,

	    title:'AUTHOR PAGE',

	    author: authors[id]

	}); 

    }); 

    return authorRouter;
}

module.exports = router; 