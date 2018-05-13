var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'http://www.pictorem.com/collection/900_Vancouver Canada vintage travel poster.jpg',
        title: 'The great Canada',
        description: 'Awesome Canada!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://i.pinimg.com/originals/43/03/ac/4303ace198992cc18af4a3c00dbb9f1b.jpg',
        title: 'The great USA',
        description: 'Awesome USA!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://ih1.redbubble.net/image.366626914.7645/flat,800x800,070,f.u1.jpg',
        title: 'The great Britain',
        description: 'Awesome UK!!!',
        price: 10
        }),
    new Product({
        imagePath: 'http://www.pictorem.com/collection/900_Vancouver Canada vintage travel poster.jpg',
        title: 'The great Spain',
        description: 'Awesome Spain!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://www.pictorem.com/collection/900_Vancouver Canada vintage travel poster.jpg',
        title: 'The great Italy',
        description: 'Awesome Italy!!!',
        price: 10
        })
];

var done = 0;
for (var i=0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

