const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find()
      .select('author created title photo price phone')
      .sort({ created: -1 });
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  try {
    const {title, text, photo,price,phone} =req.body;

    const newPost = new Post({
      title,
      text,
      photo,
      price,
      phone,
    });
    await newPost.save(); // ...save new post in DB
    res.json(newPost);

  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
