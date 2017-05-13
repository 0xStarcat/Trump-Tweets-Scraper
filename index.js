// Let's scrape the NYTimes together!
// Here's a quick tutorial that got me started https://scotch.io/tutorials/scraping-the-web-with-node-js
// And the documentation for our scraper, Cheerio, that can help if we get stuck! https://cheerio.js.org/

var express = require('express');
var fs = require('fs');
var request = require('request-promise');
var cheerio = require('cheerio');
var app     = express();
var assign = require('./lib/assigners.js')

var trumpTweets = {
  id: [], // will need to be assigned by us
  name: [],
  category: [], //  will need to be assigned by us
  title: [], // some will be missing, need to be assigned
  gender: [], //  will need to be assigned by us
  tweets: [] //number of tweets can be from this.count
}

app.get('/', function(req, res) {
  res.send('WELCOME TO THE WEB! Go to "/scrape" to start the scrape!')
})

app.get('/scrape', function(req, res) {
   url = 'https://www.nytimes.com/interactive/2016/01/28/upshot/donald-trump-twitter-insults.html';

   //loading our assignment functions library
   assign.idAssign();
   assign.genderAssign();
   assign.categoryAssign();
   assign.titleAssign();


   // We are going to use a promise so we can completely construct our object before we send it to D3 for viz processing
   // Due to the multiple asynchronous requests we are making, if we don't use promises,
   // the code would send the object before it's filled with data

   // An Express/Promise lesson https://coderwall.com/p/9cifuw/scraping-web-pages-using-node-js-using-request-promise

   requestPromise(url).then(function(data) {
     console.log(trumpTweets)
     //Send the entire object after the asynchronous request is resolved
     res.write('IDs: ('+trumpTweets.id.length.toString()+' sets assigned)'+'\n')
     res.write(trumpTweets.id.toString())
     res.write('\n///////////////////////////////////////\n\n')
     res.write('NAMES: ('+trumpTweets.name.length.toString()+' sets retrieved)'+'\n')
     res.write('********\n')
     res.write(trumpTweets.name.toString())
     res.write('\n///////////////////////////////////////\n\n')
     res.write('CATEGORIES: ('+trumpTweets.category.length.toString()+' sets retrieved)'+'\n')
     res.write('********\n')
     res.write(trumpTweets.category.toString())
     res.write('\n///////////////////////////////////////\n\n')
     res.write('TITLE: ('+trumpTweets.title.length.toString()+' sets retrieved)'+'\n')
     res.write('********\n')
     res.write(trumpTweets.title.toString())
     res.write('\n///////////////////////////////////////\n\n')
     res.write('GENDER: ('+trumpTweets.gender.length.toString()+' sets assigned)'+'\n')
     res.write('********\n')
     res.write(trumpTweets.gender.toString())
     res.write('\n///////////////////////////////////////\n\n')
     res.write('TWEETS: ('+trumpTweets.tweets.length.toString()+' sets retrieved)'+'\n')
     res.write('********\n')
     res.write(trumpTweets.tweets.toString())
     res.write('\n///////////////////////////////////////\n')
     res.end()
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
            scrapeNames($)
            scrapeTweets($)
            resolve(trumpTweets.name)
          } else {
            reject(error)
          }
        })
     })
  }
})


//Scraping functions
function scrapeNames($) {

}

function scrapeCategories($) {

}

function scrapeTitles($) {

}

function scrapeTweets($) {
  $('.g-insult-container').each(function(i, elem) {
    var tweetSet = []
    $(elem).find('a').each(function(i, elem) {
      tweetSet[i] = $(this).text()
    })
    trumpTweets.tweets[i] = tweetSet
  });
}

app.listen('8080')

console.log('Magic happens on port 8080');

exports = module.exports = app;
