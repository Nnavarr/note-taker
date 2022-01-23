const path = require('path');
const router = require('express').Router();

// home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

// notes page 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
})

// wild card handler
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

// export
module.exports = router;