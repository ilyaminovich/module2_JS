const fs = require("fs"),
path = require("path"),
notePath = path.join(__dirname, "notes.json"),
chalk = require("chalk");

function getNotes(){
    try{
        return JSON.parse(fs.readFileSync(notePath, "utf8"));
    } catch (error){
        fs.writeFileSync(notePath,'[]');
        return JSON.parse(fs.readFileSync(notePath, "utf8"));
    }
};

function addNote(title, body) {
    obj = {
        title,
        body
    };
    const arrayJson = getNotes(),
    dublicateNote = arrayJson.find(el => el.title === title);
    if (dublicateNote) {
        console.log("Sorry there is such title in json");
    } else {
        arrayJson.push(obj);
        fs.writeFileSync(notePath, JSON.stringify(arrayJson, null, " "));
    }
}

function listNote() {
    const arrayJson = getNotes();
    if(arrayJson.length > 0){
    console.log(chalk.blue.inverse("ALL NOTES"));
    console.log(fs.readFileSync(notePath, "utf8"));
    } else {
        console.log("there is no notes");
    }
}

function readNote(title) {
    const arrayJson = getNotes(),
    note = notes.find(element => element.title === title)
    if (note) {
        console.log(chalk.blue.inverse("title:") + " " + note.title) 
        console.log(chalk.yellow.inverse("body:") + " " + note.body)
    } else(
        console.log('there is no such title')
    )
}

function removeNote(title) {
    const notes = JSON.parse(fs.readFileSync(notePath, "utf8")),
    titleFinder = notes.find(item => item.title === title),
        indexOfTitle = notes.indexOf(titleFinder);
    if (titleFinder) {
        notes.splice(indexOfTitle, 1);
        console.log(titleFinder)
        console.log(chalk.red.inverse("DELETED"))
        fs.writeFileSync("notes.json", JSON.stringify(notes, null, " "));
    } else {
        console.log("nothing to delete");
    }
}

module.exports = {
    addNote,
    listNote,
    readNote,
    removeNote
}