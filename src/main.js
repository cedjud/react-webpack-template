var React = require('react');
var ReactDOM = require('react-dom');

// Import router.
var Router = require('./app/router.js');

ReactDOM.render(
    Router,
    document.getElementById('root')
);

// Require sass entry file.
require('./scss/style.scss');
