const mongoose = require("mongoose");


const divisionPlaceSchema = ({
    title: String,
    imgurl: String,
    district: String,
    division: String,
    about: String,
    how_to_go: String,
    how_to_stay: String,
    where_to_eat: String,
    some_places: String
});

const DivisionPlaces = mongoose.model("division",divisionPlaceSchema);
module.exports = DivisionPlaces;