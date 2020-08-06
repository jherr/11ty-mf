import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import header from 'starter/header';

const App = () => (
  <div>
    <div dangerouslySetInnerHTML={{ __html: header.render() }} />
    Hi there, I'm React from Webpack 5.
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
