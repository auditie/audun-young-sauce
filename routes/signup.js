const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuid } = require('uuid');

const readUsers = () => {
    const userDataFile = fs.readFileSync('./data/users.json')
    const userData = JSON.parse(userDataFile)
    return userData;
}

router.post('/signup', (req, res) => {
    const userData = readUsers();
    const newUser = {
        id: uuid(),
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email
    };
    userData.push(newUser);

    fs.writeFileSync('./data/users.json'), JSON.stringify(userData);

    res.status(201).json(newUser);
})

module.exports = router;