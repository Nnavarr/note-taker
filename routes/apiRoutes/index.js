const router = require('express').Router();
const createNewNote = require('../../lib/notes');
const uniqid = require('uniqid')

// import db, if empty create empty object
try {
    var db = require('../../db/db.json');
}
catch(err){
    var db = {};
}

// extract existing db.json and return 
router.get('/notes', (req, res) => {
    // set default value of results to db.json
    let results = db
    res.json(results);
})

// post new note to db.json
router.post('/notes', (req, res) => {
    // set id based on next index
    req.body.id = uniqid();

    // post new note
    const newNote = createNewNote(req.body, db);
    res.json(newNote);
})

// export
module.exports = router;