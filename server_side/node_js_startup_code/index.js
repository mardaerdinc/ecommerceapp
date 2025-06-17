const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb+srv://arda_erdinc:280700Arda@cluster0.5cudw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
db.once('open', () => console.log('Connected to Database'));




app.put('/:id', async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndUpdate(id, { $set: { name: "yeni ad" } }, { new: true });
   res.json('guncellendi');
});


app.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.json('Delete successfully');
});

app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});


const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: String,
  age: Number,
  email: String
});
const User = model('User', userSchema);
