// Create web server


// Load modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Create comment
router.post('/create', (req, res) => {
    // Check if user is logged in
    if (req.session.user) {
        // Find post
        Post.findById(req.body.postId, (err, post) => {
            if (err) {
                console.log(err);
                res.redirect('/');
            } else {
                // Create comment
                Comment.create({
                    content: req.body.content,
                }
            }
        }
    }
});
