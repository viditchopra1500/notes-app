const fs=require('fs');
const _=require('lodash')
const notes=require('./notes.js')
const yargs=require('yargs')

const titleOptions={
    describe:'Title of note',
    demand:true,
    alias:'t'
};
const bodyOptions={
        describe:'Body of note',
        demand:true,
        alias:'b'
    }
const argv=yargs.command('add','Add a new note',{
    title:titleOptions,
    body:bodyOptions
})
.command('list','list all nodes')
.command('getNote','Read a note',{
    title:titleOptions
})
.command('removeNote','remove a note',{
    title:titleOptions
})
.help().argv;
if(argv._[0]==='add')
{
    var note=  notes.addNote(argv.title,argv.body);
    if(note){
        console.log("note created");
        notes.logNote(note);
    }
    else{
        console.log('note title already used');
    }
}
else if(argv._[0]==='list')
{
   var allNotes= notes.getAll();
   console.log(`Printing ${allNotes.length} notes(s).`);
   allNotes.forEach((note)=>notes.logNote(note));
}
else if(argv._[0]==='getNote')
{
    var noteFound=notes.getNote(argv.title);
    if(noteFound){
        console.log("note found");
        notes.logNote(noteFound)
    }
    else{
        console.log("note not found")
    }
}
else if(argv._[0]==='removeNote')
{
    var noteRemoved=notes.removeNote(argv.title);
    if(noteRemoved){
        console.log("note was removed")
    }
    else{
        console.log("note not found");
    }
}
else 
{
    console.log("command not recognized");
}