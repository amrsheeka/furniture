const Product = require('./public/models/product');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping11',{useNewUrlParser : true},(err)=>{
if(err){
    console.log(err);
}else{
    console.log('conected');

}
});

const product = [new Product({
    ProductName : 'modern',
    Id : 1 ,
    Price: 5598,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"

}),
new Product({
    ProductName : 'modern',
    Id : 2 ,
    Price: 5599,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"
}),
new Product({
    ProductName : 'modern',
    Id : 3 ,
    Price: 12983,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"
}),
new Product({name : 'modern',
id : 4 ,
Price: 54515,
Count: 0,
IsInCart: false,
Description:"Single Bed size (140*250 cm)",
Section:"bed",
ImagePath:"/sofra33.jpg"
}),
new Product({name : 'modern',
Id : 5 ,
Price: 54315,
Count: 0,
IsInCart: false,
Description:"Single Bed size (140*250 cm)",
Section:"bed",
ImagePath:"/sofra33.jpg"
}),
new Product({
    ProductName : 'modern',
    Id : 6 ,
    Price: 5499,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"
}),
new Product({
    ProductName : 'Modern Bed S',
    Id : 98 ,
    Price: 9483,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"
}),
new Product({
    ProductName : 'modern bed ss',
    Id : 23 ,
    Price: 5599,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"
}),
new Product({
    ProductName : 'modern bed A',
    Id : 2 ,
    Price: 5599,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"
}),
new Product({
    ProductName : 'modern',
    Id : 67 ,
    Price: 5599,
    Count: 0,
    IsInCart: false,
    Description:"Single Bed size (140*250 cm)",
    Section:"bed",
    ImagePath:"/sofra33.jpg"
})
] 
var done = 0;
for(var i = 0 ; i< product.length; i++){
    product[i].save((error, doc)=>{
        if(error){
            console.log(error);
        }
        console.log(doc);
        done++;
        if(done == product.length){
            mongoose.disconnect();
        }
    })
    
}