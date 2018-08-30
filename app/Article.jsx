import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';

class Article extends React.Component {
  render() {
    debugger;
    return (
      <div className="card">
        <Markdown source={this.props.article.body} />
      </div>
    );
  }
};

export default Article;
