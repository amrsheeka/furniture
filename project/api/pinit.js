const User = require('./public/models/user');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping3',{useNewUrlParser : true},(err)=>{
if(err){
    console.log(err);
}else{
    console.log('conected');

}
});

const users = [new User({
    userName : '',

    passWord : 177 ,
    
    
}),
new User({
    userName : 'abo sasa',
    
    passWord : 137 ,
    
}),
new User({
    userName : 'sasa',
    
    passWord : 137 ,
    
}),
new User({
    userName : 'ahmed',
    
    passWord : 137 ,
    
})
] 
var done = 0;
for(var i = 0 ; i< users.length; i++){
    users[i].save((error, doc)=>{
        if(error){
            console.log(error);
        }
        console.log(doc);
        done++;
        if(done == users.length){
            mongoose.disconnect();
        }
    })
    
}