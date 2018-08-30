import React from 'react';
import ReactDOM from 'react-dom';

import Articles from './Articles';

class App extends React.Component {
  render() {
    return (
      <div>
        <Articles />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
