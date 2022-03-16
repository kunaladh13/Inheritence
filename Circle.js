var shape = require('./shape');

class Circle extends shape{
    calculateArea(){
        return 3.14*4*4;
    }
}

module.exports = Circle;