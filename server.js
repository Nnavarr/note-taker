const express = require('express');
// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// establish port and express object
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})