const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuid } = require('uuid');

const readRestaurants = () => {
    const restaurantDataFile = fs.readFileSync('./data/restaurants.json');
    const restaurantData = JSON.parse(restaurantDataFile);
    return restaurantData;
}

const readSauces = () => {
    const sauceDataFile = fs.readFileSync('./data/sauces.json');
    const sauceData = JSON.parse(sauceDataFile);
    return sauceData;
}

// GET all restaurants
router.get('/', (req, res) => {
    const restaurantList = readRestaurants();
    return res.status(200).json(restaurantList);
})

// GET a single restaurant
router.get('/:restaurantId', (req, res) => {
    const currentRestaurantId = req.params.restaurantId;
    const restaurantDataFile = fs.readFileSync('./data/restaurants.json');
    const restaurantData = JSON.parse(restaurantDataFile);
    const currentRestaurant = restaurantData.find(restaurant => restaurant.id === currentRestaurantId);

    if (!currentRestaurant) {
        res.status(404).send('No Restaurant Found')
        return;
    }

    res.status(200).json(currentRestaurant)
})

// GET sauces of specific restaurant
router.get('/:restaurantId/sauces', (req, res) => {
    const sauceData = readSauces();
    const currentRestaurantId = req.params.restaurantId;
    let filteredSauceData = sauceData.filter(sauce => {
        return sauce.restaurantID === currentRestaurantId;
    })
    res.status(200).json(filteredSauceData);
})

module.exports = router;