var twit = require('twit');
var express = require('express');
var app = express();
var config = require('./config');
var apiai = require('apiai');
var APIAII = apiai('4972cb1a09044d17b37a11401ee7dfe5');
var Twitter = new twit(config);
var fs = require("fs");
var botfunction = require('./botfunctions');
var uploadMedia = require("./uploadimage");
var mens, womens, categories, menstypes, sizes;
var stream = Twitter.stream("user", { stringify_friend_ids: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
stream.on('direct_message', function (directMsg) {
    var directms = directMsg.direct_message;
    var sender_id = directms.sender_id_str;
    var screen_name = directms.sender.name;
    var text = directms.text;
    var paramssend;
    //console.log("Text is "+text);
    //console.log(JSON.stringify(directms.sender));
    //console.log(JSON.stringify(directMsg));
    fs.writeFileSync("./data.json", JSON.stringify(directMsg), "utf8");
    if (text) {
        var request = APIAII.textRequest(text, {
            sessionId: 'APIAISESSID'
        });
        request.on('response', function (response) {
            let responseQuery = response.result.resolvedQuery;
            let result = response;
            // console.log(response.result);
            //console.log(text + "= >" + responseQuery);
            if (responseQuery == "hi") {
                var image_media = JSON.parse(uploadMedia.TwitterUpload());
                paramssend = botfunction.WelcomeParams(sender_id, screen_name, image_media.media_id_string);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    stream.stop();
                    stream.start();
                })
            }
            else if (responseQuery == "Mens") {
                categories = "Mens";
                paramssend = botfunction.CategoryParams(sender_id, responseQuery);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    stream.stop();
                    stream.start();
                })
            }
            else if (responseQuery == "Womens") {
                categories = "Womens";
                paramssend = botfunction.WomensParams(sender_id, responseQuery);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    stream.stop();
                    stream.start();
                })
            }
            else if (responseQuery == "Childrens") {
                categories = "Childrens";
                // paramssend = botfunction.ChildrensParams(sender_id, responseQuery);
            }
            else if (responseQuery == "Tshirts") {
                mens = "Tshirts";
                paramssend = botfunction.TshirtParams(sender_id, responseQuery);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    stream.stop();
                    stream.start();
                })
            }
            else if (responseQuery == "Trousers" || responseQuery == "Jeans" || responseQuery == "Shirts" || responseQuery == "Shorts") {
                mens = responseQuery;
                paramssend = botfunction.SizeParams1(sender_id, responseQuery);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    stream.stop();
                    stream.start();
                })
            }
             else if (responseQuery == "Kurti" || responseQuery == "Sari" || responseQuery == "Salwar" || responseQuery == "Lehenga") {
                womens = responseQuery;
                paramssend = botfunction.SizeParams1(sender_id, responseQuery);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    stream.stop();
                    stream.start();
                })
            }
            else if (responseQuery == "Grey" || responseQuery == "Black" || responseQuery == "Blue") {
                paramssend = botfunction.SizeParams(sender_id, responseQuery);
                menstypes = responseQuery;
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    stream.stop();
                    stream.start();
                })
            } else if ((responseQuery == "XL" || responseQuery == "S" || responseQuery == "M"
                || responseQuery == "L" || responseQuery == "XS" || responseQuery == "2XL" || responseQuery == "3XL"
                || responseQuery == "4XL" || responseQuery == "5XL" || responseQuery == "6XL") && mens == "Tshirts") {
                // console.log(JSON.stringify(result.result.fulfillment));
                // fs.writeFileSync("./data.json",JSON.stringify(result.result),"utf8");
                sizes = responseQuery;
                paramssend = botfunction.ResultParams(sender_id, categories, mens, menstypes, responseQuery);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    console.log(err);
                    stream.stop();
                    stream.start();
                })
            }
            else if ((responseQuery == "XL" || responseQuery == "S" || responseQuery == "M"
                || responseQuery == "L" || responseQuery == "XS" || responseQuery == "2XL" || responseQuery == "3XL"
                || responseQuery == "4XL" || responseQuery == "5XL" || responseQuery == "6XL") && (mens == "Trousers" || mens == "Jeans" || mens == "Shirts" || mens == "Shorts" || womens == "Kurti" || womens == "Sari" || womens == "Salwar" || womens == "Lehenga")) {
                // console.log(JSON.stringify(result.result.fulfillment));
                // fs.writeFileSync("./data.json",JSON.stringify(result.result),"utf8");
                sizes = responseQuery;
                paramssend = botfunction.ResultParams1(sender_id, categories, mens || womens, responseQuery);
                Twitter.post("direct_messages/events/new", paramssend, function (err, data, response) {
                    console.log(err);
                    stream.stop();
                    stream.start();
                })
            }
        });
        request.on('error', function (error) {
            //        console.log(error);
        });
        request.end();
    }

});

// var retweet = function () {
//     var params = {
//         q: '#nodejs,#Nodejs',
//         result_type: 'recent',
//         count: 10,
//         lang: 'en'
//     }
//     Twitter.get("search/tweets", params, function (err, data) {
//         if (!err) {
//             let retweetId = data.statuses[1].id_str;
//             Twitter.post("status/retweet/:id", { id: retweetId }, function (err, response) {
//                 console.log("Retweeted!!!" + JSON.stringify(response));
//             })


//         } else {
//             console.log(JSON.stringify(err));
//         }
//     })
// }
// retweet();
app.get("/",function(req,res){
    res.send("Localhost Server is  running!!!");
});
app.listen(process.env.PORT || 3000, function (message) {
    console.log("Server is running on the port...");
})
