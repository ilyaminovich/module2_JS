const fs = require('fs');

let a = {
    status: "AAA",
    gender: "MALE",
    health: "ALIVE",
    name: "Bobby",
    id: 10
}

let b = {
    status: "AAA",
    gender: "FEMALE",
    Health: "ALIVE",
    name: "Hobby",
    id: 1
}

let c = {
    status: "AAA",
    gender: "FEMALE",
    Health: "DEAD",
    name: "deady",
    id: 5
}


let arr = [a,b,c];


// function check(...args){
//     console.log('this is length : ' + args.length)
//     for(let i = 0; i < args.length; i++) {
//         for(let k = 0; i < arr.length; k++){
//             console.log(arr[args[i]])
//         }
//     }
// }



// function pleaseWORK(...args){
//     for(let element of arr){
//     console.log(element[args]);
//     }
// }
// pleaseWORK("name", "status")

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i].id);
// }

//РАБОЧАЯ ФУНКЦИЯ, НЕ ТРОГАТЬ, УБЬЁТ!!!

// function check(...args) {
//     for (let i = 0; i < args.length; i++) {
//         for (let k = 0; k < arr.length; k++) {
//             const result = args[i];
//             console.log(arr[k][result]);

//         }
//     }
// }

// check("id", 10);
// let jsonArr = [];
// function check(...args) {
//     for (let i = 0; i < args.length ; i+2) {
//         for (let k = 0; k < arr.length; k++) {
//             const result = args[i];
//             // console.log(arr[k][result]);
//             if(arr[k][result] === args[i+1]){
//                 jsonArr.push(arr[k])
//             }
//         }
//     }
//     fs.writeFileSync('trainJson.json', JSON.stringify(jsonArr, null, " "))
// }

// check("id", 10, "name", "deady");

// check("id", 10);


    function check(...args) {
        console.log(args.length);
    for (let i = 0; i < args.length ; i++, i %2 ==0) {
        for (let k = 0; k < arr.length; k++) {
            const result = args[i];
            console.log(arr[k][result]);
        }
    }
}

check("id", 10, "name", "deady")