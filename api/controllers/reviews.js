var Review = require('../models/reviewModel.js');

function getAll(request, response) {
  Review.find(function(error, reviews) {
    if(error) response.json({message: 'Could not find any reviews'});

    response.json({reviews: reviews});
  }).select('-__v');
}


module.exports = {
	getAll: getAll
};