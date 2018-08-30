import React from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'react-markdown';

class Article extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      html: ''
    }
  }

  componentDidMount() {
    // response we get from fetch() is not JSON
    // https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

    fetch(`api/article?id=${this.props.article.id}`).then(res =>
      res.text()
      // use res.json() if expecting JSON
    ).then(data => {
      console.log(data);

      this.setState({
        html: data
      })
    })
  }

  createMarkup(html) {
    // sanitize
    const div = document.createElement("div");
    div.innerHTML = html;
    div.querySelectorAll('script').forEach(e => e.parentNode.removeChild(e));
    div.querySelectorAll('iframe').forEach(e => e.parentNode.removeChild(e));

    return div.innerHTML;
  }

  render() {
    debugger;
    return (
      <div className="article_card">
        <a href={`api/article?id=${this.props.article.id}`} target="_blank">full screen</a>
        <div dangerouslySetInnerHTML={{__html: this.createMarkup(this.state.html)}}>
        </div>

        {/*<Markdown source={this.props.article.body} />*/}
      </div>

    );
  }
};

export default Article;
