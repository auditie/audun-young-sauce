const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuid } = require('uuid');
const jwt = require('jsonwebtoken');

const readUsers = () => {
    const userDataFile = fs.readFileSync('./data/users.json')
    const userData = JSON.parse(userDataFile)
    return userData;
}

router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (user.password === password) {
        let token = 
            jwt.sign({username:username}, 'secretkey')
            res.json({ token:token }) 

    } else {
        res.status(403).send({token:null})
    }
})

module.exports = router;