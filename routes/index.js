const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");

function checkLoggedIn(request,response,next){
    if(request.session.loggedin != true){
        response.redirect("/login");
    }else{
        next();
    }
}

function forwardLoggedIn(request, response, next){
    if(request.session.loggedin){
        response.redirect("/home");
    }else{
        next();
    }

}

router.get("/",checkLoggedIn, (request,response) =>{
    response.redirect("/home")
});

router.get("/home",checkLoggedIn, (request,response) =>{
    response.render("home",{homeCSS:true})
});

router.get("/login",forwardLoggedIn,(request,response) =>{
    response.render("login",{loginCSS:true})
})

router.post("/login",loginController.login);

router.get("/logout",(request,response) =>{
    request.session.destroy((error) =>{
        if(error){
            throw error;
        }else{
            return response.redirect("/");
        }
    });
});

module.exports = router;