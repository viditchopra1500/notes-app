# notes-app
A simple notes taking application

To run it, simply clone the repo and run npm install in the cloned folder.

Then type 'node app.js'+{command} (eg 'node app.js add -t="Test" -b="A small test" ') 
in the terminal to perform various operations like -->

**1)'add' --to add a new note.
2)'list' --to list all the already available notes.
3)'getNote' --to find a particular node and prints the content/body of that particular note.
4)'removeNote' --to remove the note which you want to.**

In case of any parameter related difficulties do check --help .eg 'node app.js add --help' (it will tell you about all the required arguments)

EXAMPLES-
```
$ node app.js add -t="Test" -b="Its the first test"
note created
----
title: Test
body: Its the first test


$ node app.js list
Printing 2 notes(s).
----
title: Test
body: Its the first test
----
title: test2
body: Its the second test


$ node app.js getNote -t="test2"
note found
----
title: test2
body: Its the second test

$ node app.js removeNote -t="Test"
note was removed
```
