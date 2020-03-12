const yargs = require("yargs"),
localmodules = require("./localmodules");
rickAndMorty = require("./rickAndMorty");

yargs.command({ 
  command: "Add",
  describe: "Add new note",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "title of note",
    },
    body: {
      type: "string",
      demandOption: true,
      describe: "body of note",
    },
  },
  handler({title, body}) {
    localmodules.addNote(title,body);
  }
});

yargs.command({
  command: "List",
  describe: "list all notes",
  handler() {
    localmodules.listNote();
  }
})

yargs.command({
    command: "Read",
    describe: "read one note by its title",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            describe: "title of note"
        }
        },
    handler({title}){
      localmodules.readNote(title);
    }
})

yargs.command({
    command: "Remove",
    describe: "remove one note by its title",
    builder: {
        title: {
            type: "string",
            demandOption: true,
            describe: "title of note"
        }
        },
    handler({title}){
      localmodules.removeNote(title)
    }
})

yargs.command({
  command: "Sort",
  describe: "list all notes",
  builder: {
    text: {
        type: "string",
        demandOption: true,
        describe: "title of note"
    }
    },
  handler({text, order}) {
    localmodules.sort(text, order);
  }
})

yargs.command({
  command: "csv",
  describe: "list all notes",
  handler() {
    localmodules.writeNotesToCSV();
  }
})

yargs.command({
  command: "readCsv",
  describe: "list all notes",
  handler() {
    localmodules.readFromExcel();
  }
})

yargs.command({
  command: "fau",
  describe: "list all notes",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "title of note",
    },
    body: {
      type: "string",
      demandOption: true,
      describe: "body of note",
    },
  },
  handler({title, body}) {
    localmodules.findAndUpdate(title, body);
  }
})

yargs.command({
  command: "rick",
  describe: "list all notes",
  builder: {
    arguments: {
        type: "",
        demandOption: true,
        describe: "title of note"
    }
    },
  handler({arguments}) {
    rickAndMorty.readRickAndMorty(arguments);
  }
})
yargs.parse();