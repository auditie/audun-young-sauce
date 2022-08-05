const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

// const restaurantRoutes = require('./routes/restaurants');
// app.use('/restaurants', restaurantRoutes);

// const sauceRoutes = require('./routes/sauces');
// app.use('/sauces', sauceRoutes);

// const userRoutes = require('./routes/users');
// app.use('/users', userRoutes);

// const commentRoutes = require('./routes/comments.js');
// app.use('/comments', commentRoutes);

app.listen(8080,() => {
    console.log('Sauce On 🍔')
})