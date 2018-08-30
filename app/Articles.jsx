import React from 'react';
import ReactDOM from 'react-dom';

import Article from './Article';

// const articles = [
  // {"name": "article_01",
   // "body": "# hey\n# hi"}
// ]

// TODO: this listing should also be based on the server's
// updated info on articles

const articles = [
  {name: "hello_world", id: 1}
]

class Articles extends React.Component {
  render() {
    return (
      <div className="card">
        <h2>Articles</h2>
        {
          articles.map(article => <Article
              key={article.id}
             article={article} />)
        }
      </div>
    );
  }
};

export default Articles;
