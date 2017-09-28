import Post from '../models/Post';

// get all posts
export function getAllPosts(req, res, next) {
  Post.find()
  .then((posts) => {
    res.status(200).json({ posts });
  })
  .catch((err) => {
    res.status(500).json({ err });
  })
}