//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/todolistDB", {
  useNewUrlParser: true,
});
const itemsSchema = {
  name: String,
};
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome",
});
const item2 = new Item({
  name: "Click + to add",
});
const item3 = new Item({
  name: "Click - to delete",
});
const defaultItems = [item1, item2, item3];

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log("there is an error");
        } else {
          console.log("Succesfully added");
        }
        res.redirect("/");
      });
    } else {
      res.render("list", {
        kindOfDay: "Today",
        newListItems: foundItems,
      });
    }
  });
});
app.post("/", function (req, res) {
  const item = new Item({
    name: req.body.newItem,
  });
  item.save();
  res.redirect("/");
});
app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  Item.findByIdAndRemove(checkedItemId, function (err) {
    if (!err) {
      console.log("sucessfully deleted checked item");
      res.redirect("/");
    }
  });
});
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
