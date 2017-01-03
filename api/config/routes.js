var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

    var WeedController = require('../controllers/reviews.js');

   router.route('./reviews')
   	.get(WeedController.getAll)

 module.exports = router