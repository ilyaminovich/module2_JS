const fs = require("fs"),
Importer = require("./importer");

const importer = new Importer();

importer.importSync('data/MOCK_DATA (1).csv');
importer.importAsync("data/MOCK_DATA.csv", "data/MOCK_DATA (1).csv");