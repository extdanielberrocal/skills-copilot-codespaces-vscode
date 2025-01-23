// Create web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

const comments = [
    { username: 'Tammy', comment: 'lololol' },
    { username: 'FishBoi', comment: 'Nice meme.' },
    { username: 'CuteDog