const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(async () => {
  await Recipe.create({ title: "Kartoffelbrei", cuisine: "german", ingredients: ["Kartoffeln", "Milch"] });
    await Recipe.insertMany(data);
    await Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100});
    await Recipe.deleteOne({title: "Carrot Cake"});
    })
    .catch(e => console.error(e))