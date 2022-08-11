const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuid } = require('uuid');

const readSauces = () => {
    const sauceDataFile = fs.readFileSync('./data/sauces.json');
    const sauceData = JSON.parse(sauceDataFile);
    return sauceData;
}

// GET all sauces
router.get('/', (req, res) => {
    const sauceList = readSauces();
    return res.status(200).json(sauceList);
})

// get single sauce 
router.get('/:sauceId', (req, res) => {
    const currentSauceId = req.params.sauceId;
    const sauceDataFile = fs.readFileSync('./data/sauces.json');
    const sauceData = JSON.parse(sauceDataFile);
    const currentSauce = sauceData.find(sauce => sauce.id === currentSauceId)

    if (!currentSauce) {
        res.status(400).send('No Sauce Found')
        return;
    } 
    res.status(200).json(currentSauce);
})

module.exports = router;