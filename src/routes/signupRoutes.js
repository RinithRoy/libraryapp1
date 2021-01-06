const express = require('express');

const signupRouter = express.Router();

function router(nav)

{

    signupRouter.get('/',function(req,res) 

{

    res.render("signup",{nav,
    
    title:'SIGN UP PAGE',

    action:'/login',

    head:'Sign Up Form',

    button:'SIGN UP'

}); 

});


    return signupRouter;
}

module.exports = router; 