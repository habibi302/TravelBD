const mongoose = require("mongoose");


const gallerySchema = ({
    allphotos:Object
});

const GalleryPhotos = mongoose.model("gallery",gallerySchema);
module.exports = GalleryPhotos;
