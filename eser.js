// eserc 1


//  let startingString = "";
//   for(let i = 0; i < 7; i++) {
//     startingString = "";
//     for ( let j = 0 ; j < i; j++) {
//         startingString = startingString + "#";
        
//     }
// startingString = startingString + "/n"
//     
     
//  }
 //   console.log(startingString);

// eserc 2


// let startingString = "";
// for(let i = 7; i > 0; i--) {
//   startingString = "";
//   for ( j = 0 ; j < i; j++) {
//       startingString = startingString + "#";
      
//   }
//   console.log(startingString);
   
// }
 

// esec 3


// let startingString = "";
//    for(let i = 0; i < 7; i++) {
//      startingString = "";
//      for ( j = 0 ; j < i; j++) {
//          startingString = startingString + "#";
        
//     }
//      console.log(startingString);
     
//   }



// eserc 4


//   for (let i = 100; i >= -100; i--) {
//     console.log(i);
//   }
  

  // eserc 5

//   for (let i = 100; i >= 0; i--) {
//     if (i % 7 === 0) {
//         console.log(i + "*")
        
//     }else{
    
//     console.log(i );
// }
//   }
  
// // eserc 6 *******************************
// for (let i = 1; i <= 100; i++) {
//     let radice = Math.sqrt(i);
//     if (radice === Math.floor(radice)) {
//       console.log(i + "*");
//     } else {
//       console.log(i);
//     }
//     }

// eserc 7
//  let numero = prompt('Inserisci un numero positivo di partenza:');
//   let numeroIniziale = parseInt(numero, 10);

//       if (numeroIniziale >= 0) {
//         for (let i = numeroIniziale; i >= 0; i--) {
//           console.log(i);
//         }
//       } else {
//         console.log('Per favore, inserisci un numero positivo.');
//       }
    

// eserc 8
// let numero = prompt('Inserisci un numero di partenza:');
// let numeroIniziale = parseInt(numero, 10);

// if (100 >=numeroIniziale) {
//   for (let i = numeroIniziale; i <= 100; i++) {
//     console.log(i);
//   }
// } else if (100 <=numeroIniziale) {
//     for (let i = numeroIniziale; i >= 100; i--) {
//         console.log(i);
    
// }
// } else {
//   console.log('Per favore, inserisci un numero valido.');
// }


// esecz 9

let numero1 = parseInt(prompt('Inserisci il primo numero:'), 10);
let numero2 = parseInt(prompt('Inserisci il secondo numero:'), 10);
if(numero1 < numero2){
for (let i = numero1; i <= numero2; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
} else if(numero1 > numero2){
    for (let j = numero2; j <= numero1; j++) {
        if (j % 2 === 0) {
          console.log(i);
        }
      }

} 