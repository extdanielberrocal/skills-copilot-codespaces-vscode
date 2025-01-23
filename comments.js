//Create a web server that listens on port 3000 and serves the following routes:
//GET /comments - returns a list of comments
//POST /comments - creates a new comment
//GET /comments/:id - returns a single comment with the id
//PUT /comments/:id - updates the comment with the id

const express = require('express');

const app = express();
app.use(express.json());

const comments = [
    {id: 1, comment: 'This is a comment'},
    {id: 2, comment: 'This is another comment'},
    {id: 3, comment: 'This is the last comment'}
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id == id);
    res.json(comment);
});
