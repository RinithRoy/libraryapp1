const express = require('express');

const booksRouter = express.Router();

function router(nav)

{

var books = [
    {
        title: 'The Call of the Wild',
        author: 'Jack London',
        genre: 'Adventure',
        img: "adventure.jpg"
    },
    {
        title: 'The Game of Thrones',
        author: 'George R Martin',
        genre: 'Fiction',
        img: "classics.png"
    },
    {
        title: 'The Adventures of Sherlock Holmes',
        author: 'Sir Arthur Conan Doyle',
        genre: 'Detective',
        img: "detective.jpg"
    }
]

booksRouter.get('/',function(req,res) 

{

    res.render("books",{nav,
        
    title:'BOOKS LIST',

    books

}); 

});

booksRouter.get('/:id',function(req,res)   

	{

	    const id = req.params.id

        res.render("book",{nav,
            
	    title:'BOOK PAGE',

	    book: books[id]

	}); 

    }); 

    return booksRouter;
}

module.exports = router; 