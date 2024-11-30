const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const Campground = require('../models/campground');
const Review = require('../models/review');
const {isLoggedIn, isReviewAuthor} = require('../middleware');
const reviews = require('../controllers/reviews')

router.post('/', isLoggedIn, catchAsync(reviews.createReview));

router.delete('/:reviewID', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;