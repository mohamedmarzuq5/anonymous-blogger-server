var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

router.post("/add-blog", async function (req, res, next) {
    console.log(req.body.blog);

    /* Adding user requested blog to MongoDB. */
    try {
        await userController.addBlog(req.body.blog);
        res.json({ error: false });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get("/blogs", async function (req, res, next) {
    console.log(req.query);

    /* Getting Blogs for user */
    let blogsArr;
    try {
        if (!req.query.sort) {
            blogsArr = await userController.getBlogs();
        } else {
            blogsArr = await userController.getThreeBlogs();
        }
        res.json({ blogs: blogsArr });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;
