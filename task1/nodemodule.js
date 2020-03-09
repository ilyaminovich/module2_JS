const yargs = require("yargs"),
localmodules = require("./localmodules");

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


yargs.parse();