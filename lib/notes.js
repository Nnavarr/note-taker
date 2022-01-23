const fs = require('fs');
const path = require('path');

// generate new note
const createNewNote = (body, notes) => {
    // function to format new note and append to 
    const note = body;

    // append new note to existing db.json notes
    notes.push(note);
    // update db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return note;
}

module.exports = createNewNote;