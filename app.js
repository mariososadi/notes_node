<<<<<<< HEAD
console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');


var command =  process.argv[2];
console.log(process.argv);
console.log('Command: ', command);

if (command === 'add') {

console.log('Adding new note');

} else if (command === 'list') {
  console.log('Listing all notes');


} else {
	console.log('Command not recognized');

}
=======
console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');


var command =  process.argv[2];
console.log(process.argv);
console.log('Command: ', command);

if (command === 'add') {

console.log('Adding new note');

} else if (command === 'list') {
  console.log('Listing all notes');


} else {
	console.log('Command not recognized');

}
>>>>>>> 6e445ee5e1ecd30f0225cb6fd04f1fc590bcb23e
