const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "apple",
  rating: 5,
  review: "Really good",
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "john",
  age: 40,
});
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

//person.save();
//fruit.save();
