const Movie = require("./movieModel");


exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch (error) {
        console.log(error);
    };
};

exports.listMovies = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    };
};

exports.updateMovie = async (movieObject, updateMovieObject) => {
    try {
        return await Movie.updateOne(movieObject, updateMovieObject);
    } catch (error) {
        console.log("Error in updateMovie function");
        console.log(error);
    };
};

//only deletes one movie
exports.deleteMovie = async (movieObject) => {
    try {
        return await Movie.deleteOne(movieObject);
    } catch (error) {
        console.log("Error in deleteMovie function");
        console.log(error);
    };
};

//deletes multiple/all movies
// exports.deleteMultipleMovies = async () => {
//     try {
//         return await Movie.deleteMany({});
//     } catch (error) {
//         console.log("Error in deleteMultipleMovies function");
//         console.log(error);
//     };
// };