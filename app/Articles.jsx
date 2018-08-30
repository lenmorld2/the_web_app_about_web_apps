import React from 'react';
import ReactDOM from 'react-dom';

import Article from './Article';

const articles = [
  {"name": "article_01",
   "body": "# hey\n# hi"}
]


class Articles extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>Articles</h2>
        {
          articles.map((article, index) => <Article
              key={index}
             article={article} />)
        }
      </div>
    );
  }
};

export default Articles;
