const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuid } = require('uuid');

const readUsers = () => {
    const usersDataFile = fs.readFileSync('./data/users.json');
    const userData = JSON.parse(usersDataFile);
    return userData;
}

// GET all users
router.get('/', (req, res) => {
    const userList = readUsers();
    return res.status(200).json(userList);
})

//ADD a user
router.post('/', (req, res) => {

})

module.exports = router;