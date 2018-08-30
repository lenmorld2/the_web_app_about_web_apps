import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        Hello World 1!
      </div>
    );
  }
};

ReactDOM.render(<Home />, document.getElementById('app'));
