// Let's scrape the NYTimes together!
// Here's a quick tutorial that got me started https://scotch.io/tutorials/scraping-the-web-with-node-js
// And the documentation for our scraper, Cheerio, that can help if we get stuck! https://cheerio.js.org/

var express = require('express');
var fs = require('fs');
var request = require('request-promise');
var cheerio = require('cheerio');
var app     = express();
var assign = require('./lib/assigners.js')
var fs = require('fs');

var trumpTweets = []

app.get('/', function(req, res) {
  res.send('WELCOME TO THE WEB! Go to "/scrape" to start the scrape!')
})

app.get('/scrape', function(req, res) {
   url = 'https://www.nytimes.com/interactive/2016/01/28/upshot/donald-trump-twitter-insults.html';

   // We are going to use a promise so we can completely construct our object before we send it to D3 for viz processing
   // Due to the multiple asynchronous requests we are making, if we don't use promises,
   // the code would send the object before it's filled with data

   // An Express/Promise lesson https://coderwall.com/p/9cifuw/scraping-web-pages-using-node-js-using-request-promise

   requestPromise(url).then(function(data) {
      var fileName = '../TRPtweets/server/db/trumptweets.json'
     // Write the data to a file when asynchronous request is resolved
      fs.writeFile(fileName, JSON.stringify(trumpTweets), function(err) {
        if(err) { return console.log(err); }
        console.log("The file was saved to " + fileName);
      });

     res.send('scrape complete - check the console')

   }, function(error) {
        res.send(error)
        console.error("%s; %s", err.message, url);
        console.log("%j", err.res.statusCode);
   })

  function requestPromise(url) {
     return new Promise(function (resolve, reject) {
       //NYtimes leads to infinite redirects because there are no cookies enabled apparently.
       //solution: pass jar:true into Request
       //https://github.com/request/request/issues/1809
       request({url, jar: true}, function(error, response, html) {
          if(!error) {
            var $ = cheerio.load(html);
            scrapeEntities($)
            resolve(trumpTweets.name)
          } else {
            reject(error)
          }
        })
     })
  }
})

//Scraping functions
function scrapeEntities($) {
  var entities = []
  $('.g-entity-item').each(function(i, elem) {
    var entity = {
      name: "",
      title: "",
      category: "",
      gender: "",
      tweets: []
    }
    $(elem).find('.g-entity-name').each(function(i, elem) {
      entity.name = $(this).text()
    })

    $(elem).find('.g-entity-title').each(function(i, elem) {
      entity.title = $(this).text()
    })

    $(elem).find('.g-insult-container').each(function(i, elem) {
      var tweetSet = []
      $(elem).find('a').each(function(i, elem) {
        tweetSet[i] = { tweet: $(this).text(), link: $(this).attr('href') }
      })
      entity.tweets = JSON.stringify(tweetSet)
      entity.count = tweetSet.length

    });
    entities.push(entity)
  });
  assignEntities(entities)
}

function assignEntities(entities) {
  for (var i = 0; i < entities.length; i++) {
    entities[i] = assign.assign(entities[i]);
    console.log(entities[i])
  }
  trumpTweets = entities
  console.log('Missing assignments: ' + assign.missing)
}



app.listen('8000')

console.log('Magic happens on port 8000');

exports = module.exports = app;
