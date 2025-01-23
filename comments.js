//Create a web server that listens on port 3000. It should return the comments array in JSON format when it receives a GET request to the path /comments. The comments array is defined in the following way:

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