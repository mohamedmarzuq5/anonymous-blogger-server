/**
 * A controller file created for handling all user requests
 */
const Blog = require("../models/blogSchema");

module.exports = {
    addBlog: async (newBlog) => {
        // console.log(await Blog.count());
        try {
            await Blog.create({
                content: newBlog,
                approved: false,
            });

            // console.log(blog);
        } catch (error) {
            console.error("Error: " + error.message);
            throw new Error(error.message)
            // return error.message
        }
    },
};
