// const emptyObj = {}

// const student = {
//     name: "andrea",
//     surname: "asioli",
//     yob: 1978,
//     marks: [9, 10, 8],
//     address: {
//         street: "via canneto il curto",
//         streetNumber: 12,
//         cap: 16123

//     },
//     "is Married": false
// }
// console.log(student)

// console.log(student.name)
// console.log(student["surname"])
// console.log(["is Married"])
// console.log(student.address.street)
// console.log(student.marks[0])

// const startingObj = {};
// console.log(startingObj)

// startingObj.name = "starting Object"
// startingObj.creationDate = "21/02/25"
// console.log(startingObj)


// const book1 = {
//     title: "eloquent js",
//     author: "marijn haverbeke",
//     edition: 4,
//     yop: 2024,
//     isAvailable: true
// }
// for (const key in book1) {
//     if (Object.prototype.hasOwnProperty.call(book1, key)) {
//         const value = book1[key];
//         console.log(`il valore associato alla chiave ${key} è ${value}`)

//     }
// }



// const arrayOfKeys = Object.keys(book1);
// console.log(arrayOfKeys);

// for (let i = 0; i < Object.keys(book1).length; i++) {
//     const key = Object.keys(book1)[i];
//     const value = book1[key]
//     console.log(`il valore associato alla chiave ${key} è ${value}`)

// }

// const arrayOfEnterries = Object.keys(book1);
// console.log(arrayOfEnterries)


// book1 = {
//     title: "odissea",
//     author: "omero",
//     edition: 112000,
//     yop: 2023,
//     isAvailable: false
// }

// Object.freeze(book1)


// book1.title = "odissea";
// book1.author = "omero";

// console.log(book1)


// const book2 = book1;
// book2.title = "le porno avventure di biancaneve"

// console.log(book1)



 const student = {
     name: "andrea",
    surname: "asioli",
     yob: 1978,
     marks: [9, 10, 8],
    address: {
         street: "via canneto il curto",
         streetNumber: 12,
        cap: 16123

    },
}

student.name = "andreino";
student.address.streetNumber = 1245254245345;
console.log(student)
