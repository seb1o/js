// const gridaSchiappa = function () {
//     console.log("SCHIAPPAaa!!!")
// }

// console.log(typeof gridaSchiappa)
// gridaSchiappa()

// // const gridaSchiappa2 = function (name) {
// //     console.log( name + " SCHIAPPAaa!!!")
// // }

// function gridaSchiappa2(name){
//     console.log( name + " SCHIAPPAAA!!!")
// }

// gridaSchiappa2("pippo")
// gridaSchiappa2("ciao")
// gridaSchiappa2(2)
// gridaSchiappa2(true)



// const logDouble = (number) => console.log(number*2)

// logDouble(20)
//  console.log(logDouble(15))

//  function sum(number1, number2){
//     const sum = number1 + number2;
//     return sum;
//  }

//  const sumArrow = (n1 = 0, n2 = 0) => n1 + n2;
//  const sumArrow2 = (n1, n2) => {
//     const sum = n1 + n2;
//     return sum;
//  }

//  console.log(sum(10,8))
//  const result = sum(20, 12)
//  console.log(result)

//  const result2 = sum( 20, 30, 60, 140)
//  console.log(result2)

//  const result3 = sum(11); // somma number1 con undefi e da NaN
//     console.log(result3)
 

// scopes

// const hello = "ciao";

// function sayhHelloTo(name){

//     function createHelloString(name){
//         const helloString = hello + " " + name + "!";
//         return helloString
// }
// const newHello = createHelloString(name)
// console.log(newHello)
// }


//  sayhHelloTo("Sara")
 
// console.log(hello)

// // clojure

// function createCallTwice(name){
//     const call = name + ',' + name + '!';

//     const callFunction = ( ) => console.log(call)
// return(callFunction)
// }
// const callTwice = createCallTwice('andrea')
// callTwice()


// function createMultiplicator(number){

//     const multiplicatorFunction = function(numbToMultiply){
//         return  numbToMultiply * number;

//     }
//     return multiplicatorFunction
// }
// const multiplicatorX2 = createMultiplicator(2);
// const multiplicatorX3 = createMultiplicator(3);

// console.log(multiplicatorX2(10))
// console.log(multiplicatorX2(13))

// console.log(multiplicatorX3(10))
// console.log(multiplicatorX3(13))


// function createCounter(){
//     let counter = 0;
//     const incrementFunction = function() {
//         counter++;
//         return counter;
//     }
//     return incrementFunction
// }

// const increment = createCounter();
// console.log(increment())
// console.log(increment())
// console.log(increment())
// console.log(increment())

// recursion

function fact(number){
    if (number === 0){
        return 1;
    }
        return number * fact(number - 1);
    
}

console.log(fact(5))
console.log(fact(6))
console.log(fact(7))
console.log(fact(8))