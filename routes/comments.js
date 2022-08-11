const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuid } = require('uuid');

const readComments = () => {
    const commentsDataFile = fs.readFileSync('./data/comments.json');
    const commentsData = JSON.parse(commentsDataFile);
    return commentsData;
}

//GET all comments
router.get('/', (req, res) => {
    const commentsList = readComments();
    return res.status(200).json(commentsList);
})

//ADD a comment to a sauce
router.post('/', (req, res) => {
    if (!req.body.sauceId || !req.body.userName || !req.body.comment) {
        return res.status(400).send('All fields are required');
    }

    const sauceData = readComments();
    const newComment = {
        id: uuid(),
        sauceId: req.body.sauceId,
        userName: req.body.userName,
        comment: req.body.comment
    }
    sauceData.push(newComment);

    fs.writeFileSync('./data/comments.json', JSON.stringify(sauceData));

    res.status(201).json(newComment);
})

module.exports = router;