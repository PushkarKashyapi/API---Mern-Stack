// WRAPPING FUNCTION // 
console.log(arguments);



// MODULE.EXPORTS
const calc1 = require('./text1');
const realc = new calc1(); 

console.log(realc.add(6 , 7));
console.log(realc.divide(6 , 7));
console.log(realc.multiply(6 , 7));

// EXPORTS // 
const calc2 = require('./test2');

console.log(calc2.add(7,8))
console.log(calc2.subtract(7,8))
console.log(calc2.multiply(7,8))
console.log(calc2.divide(7,8))

// CACHOING // 

require('./test3')() ;
require('./test3')() ;
require('./test3')() ;