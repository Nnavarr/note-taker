const router = require('express').Router();
const createNewNote = require('../../lib/notes');
const uniqid = require('uniqid')
const fs = require('fs');
const path = require('path');

// extract existing db.json and return 
router.get('/notes', (req, res) => {
    // import db, if empty create empty object
    try {
        var db = require('../../db/db.json');
    }
    catch(err){
        var db = {};
    }

    // set default value of results to db.json
    let results = db
    res.json(results);
})

// post new note to db.json
router.post('/notes', (req, res) => {
    // import db, if empty create empty object
    try {
        var db = require('../../db/db.json');
    }
    catch(err){
        var db = {};
    }

    // set id based on next index
    req.body.id = uniqid();

    // post new note
    const newNote = createNewNote(req.body, db);
    res.json(newNote);
})

// delete notes 
router.delete('/notes/:id', (req, res) => {
    // import db, if empty create empty object
    try {
        var db = require('../../db/db.json');
    }
    catch(err){
        var db = {};
    }
    console.log(db);

    // // extract note id and delete that id from db
    let index = db.notes.findIndex(function(item){
        return item.id === req.id;
    })
    // remove object
    db.notes.splice(index, 1)
    console.log(`this is the filtered notes ${db}`)

    // var notes = db.notes;

    // // check for length of array, print empty [] if length < 1
    // if (notes.length < 1) {
    //     notes = {};
    // }
    
    // // write db.json file 
    // fs.writeFileSync(
    //     path.join(__dirname, '../../db/db.json'),
    //     JSON.stringify({ notes }, null, 2)
    // )

    // res.send('The note has been deleted.')
})

// export
module.exports = router;