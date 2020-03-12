const axios = require('axios');
const fs = require('fs');
chalk = require("chalk");

function pleaseWork(){

    let arrayJson =[]; 

    let numberOfPages;
    axios({
        method: 'get',
        url: `https://rickandmortyapi.com/api/character/?page=1`,
        responseType: 'json'
    }).then(response =>{
        
        numberOfPages = response.data.info.pages;
    }).then(() => {
        console.log(numberOfPages);
        for(let i=1; i <= numberOfPages; i++){
        axios({
            method: 'get',
            url: `https://rickandmortyapi.com/api/character/?page=${i}`,
            responseType: 'json'
            })
            .then(response =>{
                arrayJson = arrayJson.concat(response.data.results).sort((a,b) => a.id - b.id);
                fs.writeFileSync('./rickAndMorty.json', JSON.stringify(arrayJson, null, " "))
            });

        }
        
    });
}


function getNotes(){
    try{
        return JSON.parse(fs.readFileSync('./rickAndMorty.json', "utf8"));
    } catch (error){
        fs.writeFileSync('./rickAndMorty.json','[]');
        return JSON.parse(fs.readFileSync('./rickAndMorty.json', "utf8"));
    }
};

function readRickAndMorty(...args){
    const arrayJson = getNotes();
    for(let i = 0; i < args.length; i++){
    const note = arrayJson.filter(element => element.args[i] === args[i])




    // if (note) {
    //     console.log(chalk.blue.inverse("name") + " " + note.name);
    // } else(
    //     console.log('there is no such id')
    // )
}
console.log(note);
}

// module.exports ={
//     readRickAndMorty
// }
// // pleaseWork();

readRickAndMorty(1);