require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Word } = require('./db')

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

const app = express();

app.use(express.static(__dirname + '../client/dist'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/words', async (req, res) => {
  try {
    const words = await Word.find().sort({word: 1});
    res.status(200).json(words)
  } catch (err) {
    res.status(404).json({message: err.message})
  }
})

app.post('/words', async (req, res) => {
  try {
    const newWord = {
      word: req.body.word.toLowerCase(),
      definition: req.body.definition
    }
    const existedWord = await Word.findOne({word: newWord.word});
    if (existedWord) {
      res.status(201).json('Word is already in the list!')
    } else {
      await Word.create(newWord);
      const words = await Word.find().sort({word: 1});
      res.status(201).json(words);
    }
  } catch (err) {
    res.status(409).json({message: err.message})
  }


})

app.put('/words', async (req, res) => {
  const {_id, word, definition} = req.body;
  const filter = {_id};
  const update = { word, definition }
  try {
    await Word.updateOne(filter, {$set: update});
    const words = await Word.find().sort({word: 1});
    res.status(200).json(words);
  } catch (err) {
    res.status(409).json({message: err.message})
  }
})

app.delete('/words', async (req, res) => {
  const filter = {
    _id: req.body._id
  };
  try {
    await Word.deleteOne(filter);
    const words = await Word.find().sort({word: 1});
    res.status(200).json(words);
  } catch (err) {
    res.status(409).json({message: err.message})
  }
})


let port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})