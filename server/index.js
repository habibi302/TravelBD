const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const FamousPlace = require("./Models/famousplace");
const DivisionPlaces = require("./Models/division");
const GalleryPhotos = require("./Models/gallery");


const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/PrintPlace");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.send("Hi There!");
})

app.get("/famousplaces/:postTitle", function(req, res){
    FamousPlace.findOne({"title": req.params.postTitle}, function(err, result){
        if(err){
            res.send(err);
        }else{
            console.log(result);
            res.send(result);
        }
    });
});


app.get("/allplacesinadivision/:division", function(req, res){
    DivisionPlaces.find({"division": req.params.division}, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});

app.post("/insert", function(req, res){
    const newPost = new DivisionPlaces({
        title: req.body.title,
        imgurl: req.body.imgurl,
        district: req.body.district,
        division: req.body.division,
        about: req.body.about,
        how_to_go: req.body.howToGo,
        how_to_stay: req.body.howToStay,
        where_to_eat: req.body.whereToEat,
        some_places: req.body.somePlaces
    });

    newPost.save(function(err){
        if(err){
            res.send(err);
        }else{
            res.send("Successfully added to the database!");
        }
    });
});


app.post("/update", function(req, res){
    const up= {
        title: req.body.title,
        imgurl: req.body.imgurl,
        district: req.body.district,
        division: req.body.division,
        about: req.body.about,
        how_to_go: req.body.howToGo,
        how_to_stay: req.body.howToStay,
        where_to_eat: req.body.whereToEat,
        some_places: req.body.somePlaces
    };

    DivisionPlaces.findOneAndUpdate({"_id":req.body.id},up, function(err){
        if(err){
            res.send(err);
        }else{
            res.send("Updated Successfully!")
        }
    });
});

app.post("/delete", function(req, res){

    DivisionPlaces.findOneAndDelete({"_id":req.body._id}, function(err){
        if(err){
            res.send(err);
        }else{
            res.send("Deleted Successfully!")
        }
    });
});



app.get("/getallplace", function(req, res){
    DivisionPlaces.find({}, function(err, result){
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    });
});


app.get("/galleryphotos", function(req, res){
    GalleryPhotos.find({}, function(err, result){
        if(err){
            res.send(err);
        }else{
            const val = result[0];
            res.send(val.allphotos);
        }
    });
});


app.get("/search/:keywords", function(req, res){
    DivisionPlaces.find({$text: {$search: req.params.keywords}}, function(err, result){
        if(err){
            res.send(err);
        }else{
            console.log(result);
            res.send(result);
        }
    });
});





app.listen(3001,function(){
    console.log("Server started successfully on port 3001!!");
});

