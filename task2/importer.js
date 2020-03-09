const csvToJson = require("csvtojson"),
fs = require("fs"),
path = require("path"),
pathToFile = path.join(__dirname, "import.json");

class Importer{

    importAsync(pathToImport1, pathToImport2){
        const promiseFirst = new Promise(resolve => resolve(
            csvToJson()
            .fromFile(pathToImport1)
));
 
const promiseSecond = new Promise(resolve => resolve(
    csvToJson()
    .fromFile(pathToImport2)
));
 
Promise.all([promiseFirst, promiseSecond])
.then(value => {
    console.log(value);
})
.catch(console.log("ERROR!"));
};

    importSync(pathToImport){
        csvToJson().fromFile(pathToImport).then(source => {
            const arr = [];
            // const arr = JSON.parse(fs.readFileSync(pathToFile, "utf8"));
            arr.push(source);
            fs.writeFileSync(pathToFile, JSON.stringify(arr, null, " ")); //sync method
            console.log(arr);
});
}
}

module.exports = Importer;