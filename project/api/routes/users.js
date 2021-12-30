var express = require('express');
var router = express.Router();
const {check ,validationResult} = require('express-validator');
const User =require('../public/models/user');
/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.send('users/signup');
});
router.post('/signup',[
  check('username').not().isEmpty().withMessage('please Enter your Email'),
  check('firstname').not().isEmpty().withMessage('please Enter your firstName'),
  check('firstname').isLength({min : 2}).withMessage('please enter firstName more than 5'),
  check('lastname').not().isEmpty().withMessage('please Enter your lastName'),
  check('lastname').isLength({min : 2}).withMessage('please enter lastName more than 5'),
  check('password').not().isEmpty().withMessage('please Enter your password'),
  check('password').isLength({min : 5}).withMessage('please enter password more than 5'),
  check('confirm_password').custom((value,{req})=>{
    if(value !== req.body.password){
      throw new Error('password and confirm-password not matched')
    }else{
    return true ;
    }
  })
  ],(req,res,next)=>{
    const error = validationResult(req);
    if(! error.isEmpty()){
      console.log(error);
      return ;
    }
    const user = new User({
      userName :req.body.username,
      firstName : req.body.firstname,
      lastName : req.body.lastname,
      passWord :req.body.password,
      confirm_passWord: req.body.confirm_password
    })
    user.save((error,doc)=>{
      if(error){
        console.log(error)
      }
      res.send(doc)
    })
  
})

User.find({}, (error, doc) => {
  if (error) {
    console.log(error);
  } else {
    var docsGride = [];
    var slide = 4;
    for (var i = 0; i < doc.length; i++) {
      docsGride.push(doc.pop(i));
    }
    console.log(docsGride);
  }
});

module.exports = router;

