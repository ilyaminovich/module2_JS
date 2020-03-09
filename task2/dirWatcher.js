class DirWatcher {
watch() {
const chokidar = require("chokidar"),
  fs = require("fs"),
  path = require("path"),
  pathToWrite = path.join(__dirname, "filewithdata.json"),
  pathToFile = path.join(__dirname, "data"),
  watcher = chokidar.watch(pathToFile, {
  persistent: true
    });
  
    const showChanges = (message) => {
    const arrayJson = JSON.parse(fs.readFileSync(pathToWrite, "utf8"));
    arrayJson.push(message);
    return fs.writeFileSync(pathToWrite, JSON.stringify(arrayJson, null, " "));
    }

    watcher.on("add", pathToFile => showChanges(`File ${pathToFile} has been added`))
    watcher.on("change", pathToFile => showChanges(`File ${pathToFile} has been changed`))
    watcher.on("unlink", pathToFile => showChanges(`File ${pathToFile} has been removed`));
  }
}

module.exports = new DirWatcher;