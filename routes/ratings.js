const express = require('express')
const router = express.Router()
const fs = require('fs')

const readRatings = () => {
    const ratingsDataFile = fs.readFileSync('./data/ratings.json');
    const ratingsData = JSON.parse(ratingsDataFile);
    return ratingsData;
}

//GET all ratings
router.get('/', (req, res) => {
    const ratingsList = readRatings();
    return res.status(200).json(ratingsList);
})

//ADD a rating for a sauce
router.post('/ratings', (req, res) => {
    const ratingData = readRatings();
    const newRating = {
        sauceId: req.body.sauceId,
        rating: req.body.rating
    }
})

module.exports = router;