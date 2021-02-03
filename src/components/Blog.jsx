/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Article from './Article';
import blogService from '../services/blogService';
import '../styles/General.css';

const BlogLogic = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [blogs, setBlogs] = useState([]);

  const hook = () => {
    blogService
      .getAll()
      .then((initialBlog) => {
        setBlogs(initialBlog);
      });
  };

  useEffect(hook, []);

  const handleTitleChange = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    console.log(event.target.value);
    setAuthor(event.target.value);
  };

  const handleBodyChange = (event) => {
    console.log(event.target.value);
    setBody(event.target.value);
  };

  const addLike = (id) => {
    const blog = blogs.find((b) => b.id === id);
    console.log('blog was found', blog);
    const changedBlog = { ...blog, likes: blog.likes + 1 };
    console.log(changedBlog);
    blogService.update(id, changedBlog)
      .then((returnedBlog) => {
        setBlogs(blogs.map((blog2) => (blog2.id !== id ? blog2 : returnedBlog)));
      });
  };

  const addBlog = (event) => {
    event.preventDefault();
    const blogObj = {
      id: blogs.length + 1,
      title,
      author,
      body,
      likes: 0,
    };
    console.log('blog obj created');

    blogService
      .create(blogObj)
      .then((returnedBlog) => {
        setBlogs(blogs.concat(returnedBlog));
        setBody('');
        setTitle('');
        setAuthor('');
      });
  };

  return (
    <div>

      <div
        className="main"
        style={{ fontSize: '15px' }}
      >
        <form onSubmit={addBlog}>
          <div>
            <label> Blog Title: </label>
            <input value={title} onChange={handleTitleChange} />
            <label> Author Name: </label>
            <input value={author} onChange={handleAuthorChange} />
          </div>

          <br />

          <label>Write a Blog!</label>
          <textarea
            value={body}
            onChange={handleBodyChange}
            rows="2"
            placeholder="What's on your mind?"
          />
          <br />
          <br />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {blogs.map((art) => <Article key={art.title} article={art} func={() => addLike(art.id)} />)}
    </div>
  );
};

export default BlogLogic;
