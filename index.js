const express = require("express");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("The NewsPaper server site is running!");
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.get("/news/all", (req, res) => {
  res.send(news);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/category/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const CategoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(CategoryNews);
  }
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id == id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`The Server is Running ${port}`);
});
