var db = require('./api/models');

// var Weeds = require('./api/models/reviewModel.js');

var revList = [{
	"address": "made up street",
	"review" : "has pot, is good",
	"stars" : "3/5"
},
{
	"address": "made up street",
	"review" : "has pot, is good",
	"stars" : "3/5"
},
{
	"address": "made up street",
	"review" : "has pot, is good",
	"stars" : "3/5"}
];




db.Rev.create(revList, function(err, rev){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new revs")
  process.exit(); // we're all done! Exit the program.
})

module.exports = revList;