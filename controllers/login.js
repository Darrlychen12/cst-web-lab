let loginModel = require('../models/loginData');

exports.login = function(request, response, next){
    let username = request.body.username;
    let password = request.body.password;
    let user = loginModel.getAccount(username, password);
    user.then(data => {
        if(data[0][0]){
            
            request.session.loggedin = true;
            response.redirect('/home');
        }else{
            response.redirect('/login');
        }
    }).catch(error =>{
        console.log(error);
    })
}
