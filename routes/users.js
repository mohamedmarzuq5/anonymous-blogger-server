var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.post('/add-blog', async function(req, res, next) {
  console.log(req.body.blog);
  
  /* Adding user requested blog to MongoDB. */
  try {
    await userController.addBlog(req.body.blog)
    res.json({ error: false })
  } catch (error) {
    res.status(500).json({ error: error })
  }
});


router.get('/blogs', async function(req, res, next) {
  /* Getting Blogs for user */
  try {
    const blogsArr = await userController.getBlogs();
    res.json({blogs: blogsArr});
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
