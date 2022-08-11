const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

const restaurantRoutes = require('./routes/restaurants');
app.use('/restaurants', restaurantRoutes);

const sauceRoutes = require('./routes/sauces');
app.use('/sauces', sauceRoutes);

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

const loginRoutes = require('./routes/login');
app.use('/login', loginRoutes);

const signupRoutes = require('./routes/signup');
app.use('/signup', signupRoutes);

const profileRoutes = require('./routes/profile');
app.use('/profile', profileRoutes);

const commentsRoutes = require('./routes/comments');
app.use('/comments', commentsRoutes);

const ratingsRoutes = require('./routes/ratings');
app.use('/ratings', ratingsRoutes);

app.listen(8080,() => {
    console.log('Sauce On 🍔')
})