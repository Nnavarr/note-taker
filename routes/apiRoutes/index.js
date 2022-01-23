const router = require('express').Router();
const createNewNote = require('../../lib/notes');
const notes = require('../../db/db.json');
const uniqid = require('uniqid');

// import db.json
const db = require('../../db/db.json');

// extract existing db.json and return 
router.get('/notes', (req, res) => {
    // set default value of results to db.json
    let results = db;
    res.json(results);
})

// post new note to db.json
router.post('/notes', (req, res) => {
    // set id based on next index
    req.body.id = uniqid();

    // post new note
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
})


// export
module.exports = router;