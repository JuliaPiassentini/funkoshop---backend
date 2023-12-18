const session = require('express-session');


function initSession () {
    return session({
            secret : "sessionSecreta",
            resave: false ,
            saveUninitializated: true
          });
    
};
module.exports ={
    initSession
}