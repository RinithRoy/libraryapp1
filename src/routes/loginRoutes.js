const express = require('express');

const loginRouter = express.Router();

function router(nav)

{

    loginRouter.get('/',function(req,res) 

{

    res.render("login",{nav,

    title:'LOGIN PAGE',

    action:'/',

    head:'Login Form',

    button:'LOGIN'

}); 

});


    return loginRouter;
}

module.exports = router; 