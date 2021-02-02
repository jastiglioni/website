/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import blogService from '../services/blogService';

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

  // const addLike = (id) => {
  //   const blog = blogs.find((b) => b.id === id);
  //   console.log('blog was found', blog);
  //   const changedBlog = { ...blog, likes: blog.likes + 1 };
  //   console.log(changedBlog);
  //   blogService.update(id, changedBlog)
  //     .then((returnedBlog) => {
  //       setBlogs(blogs.map((blog) => (blog.id !== id ? blog : returnedBlog)));
  //     });
  //   // setBlogs(hook)
  // };

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
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <form onSubmit={addBlog}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <label> Blog Title: </label>
            <input value={title} onChange={handleTitleChange} size="50" />
            <label> Author Name: </label>
            <input value={author} onChange={handleAuthorChange} size="50" />
          </div>
          <br />
          <label>Write a Blog!</label>
          <br />
          <br />
          <textarea
            value={body}
            onChange={handleBodyChange}
            rows="2"
            placeholder="What's on your mind?"
            style={{
              width: '100%',
            }}
          />
          <br />
          <br />
          <button
            type="submit"
            style={{
              float: 'right',
            }}
          >
            Submit

          </button>
        </form>
      </div>
      {blogs.map((art) => <Blog key={art.title} article={art} />)}
    </div>
  );
};

export default BlogLogic;
