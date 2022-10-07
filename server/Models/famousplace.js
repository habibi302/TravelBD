const mongoose = require("mongoose");


const famousPlaceSchema = ({
    title: String,
    imgurl: String,
    district: String,
    division: String,
    how_to_go: String,
    how_to_stay: String,
    where_to_eat: String,
    some_places: String
});

const FamousPlace = mongoose.model("famous",famousPlaceSchema);
module.exports = FamousPlace;