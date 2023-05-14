/**
 * A controller file created for handling all user requests
 */
const Blog = require("../models/blogSchema");

module.exports = {
    addBlog: async (newBlog) => {
        // console.log(await Blog.count());
        try {
            await Blog.create({
                title: newBlog.title,
                content: newBlog.content,
                approved: false,
            });

            // console.log(blog);
        } catch (error) {
            console.error("Error: " + error.message);
            throw new Error(error.message);
            // return error.message
        }
    },
    getBlogs: async () => {
        // console.log(await Blog.count());
        try {
            const blogs = await Blog.find({
                approved: false,
            });

            console.log(blogs);
            return blogs;
        } catch (error) {
            console.error("Error: " + error.message);
            throw new Error(error.message);
            // return error.message
        }
    },
};