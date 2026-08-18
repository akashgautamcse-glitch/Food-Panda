const React = require('react');
const ReactDom = require('react-dom');

const heading = <h1>Hello World</h1>

const root = ReactDom.createRoot(document.querySelector(".container"));

root.render(heading);