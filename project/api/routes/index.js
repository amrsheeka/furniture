var express = require("express");

var router = express.Router();
const User = require("../public/models/user");
const Product = require("../public/models/product");

/* GET home page. */
//  router.get('/', function(req, res, next) {
//    res.render("server");

//  });

Product.find({}, (error, doc) => {
  if (error) {
    console.log(error);
  } else {
    var docsGride = [];
    var slide = 4;
    for (var i = 0; i < doc.length; i++) {
      docsGride.push(doc.pop(i));
    }
    router.get("/", function (req, res, next) {
      res.json(docsGride);
    });
  }
});

router.post("/insertproduct", (req, res, next) => {
  const product = new Product({
    Id :req.body.id,
    ImagePath : req.body.imagePath,
    
    Price :req.body.price,
    Description: req.body.description,
    Count: req.body.count,
    IsInCart: req.body.isInCart,
    Section: req.body.section,
    ProductName : req.body.name,
  })
  product.save((error,doc)=>{
    if(error){
      console.log(error)
    }
    else{res.send(doc)}
    
  })
});
  
module.exports = router;
