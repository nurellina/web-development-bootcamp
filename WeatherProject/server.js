const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apiKey = "806829f84ee3dab0dd8f155ec362204d";
    const units = "metric";
    var url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&appid=" +
      apiKey +
      "&units=" +
      units;
    https.get(url, function (response) {
      response.on("data", function (data) {
        var weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.main.temp;
        const weatherDescription = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(temp);
        res.write(
          "<p>The weather is currently " + weatherDescription + ".</p>"
        );
        res.write(
          "<h1>The temprature in " +
            query +
            " is " +
            temp +
            " degrees Celcius</h1>"
        );
        res.write("<image src=" + imageURL + "></image>");
        res.send();
      });
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});