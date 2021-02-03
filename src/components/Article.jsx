/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Blog.css';
// eslint-disable-next-line react/prop-types
const Article = ({ article, func }) => (

  <div className="main">
    <article>

      <h2>{article.title}</h2>
      <h6>{article.author}</h6>

      <p>
        {article.body}
      </p>
    </article>

    <button type="button" onClick={func}>
      Like
      {' '}
      <span role="img" aria-label="heart">❤️</span>
    </button>

  </div>
);

// Blog.propTypes = {
//   // article: PropTypes.objectOf(PropTypes.string.isRequired),
//   article: PropTypes.array
// };

export default Article;
