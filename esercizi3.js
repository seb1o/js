const array1 = [23, 14, 56, 44, 3, 0, -1, 55, -12, 60, 8]

// 1-filtrare tutti i numeri uguali o minori a zero
 function minorOrSmallerThan0(arrayOfNumbers){
     const newArray = []
     for (let i = 0; i < arrayOfNumbers.length; i++) {
        const element = arrayOfNumbers[i];
         if(element <= 0){
            newArray.push(element)

        }
       
    
        
     }
     return newArray
 }

 const array5000 = minorOrSmallerThan0(array1)
 console.log('minori o uguali a 0', array5000)



// 2-convertire in gradi fahrenheit ipotizando che l'unita di partenza celcius

function convertToFahrenheit(arrayOfNumbers){
    const newArray = []
    for (let i = 0; i < arrayOfNumbers.length; i++) {
       let element = arrayOfNumbers[i];
       element = ((element* 1.8) +32)
           newArray.push(element)

       }
      
   
       
   
    return newArray
}

const array5001 = convertToFahrenheit(array1)
console.log('valori in fahrenheit', array5001)
// 3-fare la media dei valori

function mediumValeu(arrayOfNumbers){
  let accumulator = 0
   let media = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
       let element = arrayOfNumbers[i];
       accumulator = element+accumulator 
         
       }
      
       media = accumulator/arrayOfNumbers.length
         
   
    return media
}

const array5002 = mediumValeu(array1)
console.log('media valori', array5002)

// 4-restituire il valore piu basso e il piu alto

function minValueAndMaxValueArray(arrayOfNumbers){
    const newArray = []

    for (let i = 0; i < arrayOfNumbers.length; i++) {
       let element = arrayOfNumbers[i];
       minim = 0;
       maxi = 0
     if (element<= minim ) {
        minim = element
         
   
     }else if(element => maxi){
        maxi = element

     }
       }
      
   
       
   
    return newArray
}

const array5001 = convertToFahrenheit(array1)
console.log('valori in fahrenheit', array5001)


const array2 = ['pippo', 'pluto', 'paperino', 'qui', 'quo', 'qua', 'clarabella', ]
//5-filtrare tutti i nomi piu grandi di 4 caratteri
//6-trasformare tutte le stringe in maiuscolo
//7-mettere solo le iniziali maiuscole
//8-restituire una stringa composta dalle iniziale delle parole
//9-contare tutti i carateri di tutte le stringhe
//10-eliminare le vocali dalle stringhe
//11-restituire un array di numeri che sono le lunghezze delle singole parole


const array3 = [[1,2,3], [3,2,1,0], [0,0,0,0,0]]

//12-restituire un array di numeri che sono le lunghezze dei singoli array
//13