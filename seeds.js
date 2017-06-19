var mongoose = require("mongoose");
var Campground = require("./models/campground"),
    Comment    = require("./models/comment");

var data = [
        {
            name: "Bear Mountain", 
            image: "http://c1.staticflickr.com/4/3382/3626191803_818f0cddf4_z.jpg", 
            description: "Take the Palisades Parkway up to Bear Mountain and after a scenic 30 miles, you’ll be surrounded by roughly 200 miles of hiking trails, 31 lakes and unbridled Instagram potential of the NYC skyline far off in the distance. At Harriman State Park, you can flat-out unroll your sleeping bag next to Lake Tiorati and sleep there, find a stone lean-to sprinkled along the park and call that your home, or opt for more civilized camping in one of the park’s many cabins."
        },
        {
            name: "Minnewaska State Park", 
            image: "https://media.timeout.com/images/103291963/350/263/image.jpg",
            description: "The Samuel F. Pryor III Shawangunk Gateway Campground on the Minnewaska State Park Preserve opened just last year. "
        },
        {
            name: "Lackawanna State Park", 
            image: "https://media.timeout.com/images/103292210/350/263/image.jpg",
            description: "No camper? No problem! Reserve a yurt—a round, canvas-and-wood walled tent—that features such comforts as a microwave and refrigerator and sleeps up to five people, bunk bed-style."
        },
        {
            name: "Harriman State Park", 
            image: "https://media.timeout.com/images/102769921/350/263/image.jpg",
            description: "Take the Palisades Parkway up to Bear Mountain and after a scenic 30 miles, you’ll be surrounded by roughly 200 miles of hiking trails, 31 lakes and unbridled Instagram potential of the NYC skyline far off in the distance."
        }
    ]


function seedDB(){
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("Removed campgrounds!");
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, data){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("add a campground");
        //             Comment.create({text: "This place is great but i wish there was internet",
        //                             author: "Abbas"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err)
        //                 } else {
        //                     data.comments.push(comment);
        //                     data.save();
        //                     console.log("Created comment");
        //                 }
        //             })
        //         }
        //     })
        // })
    });
}
module.exports = seedDB;