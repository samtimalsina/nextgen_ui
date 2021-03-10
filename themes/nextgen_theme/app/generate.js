// An experimental way to generate server rendered HTML files 
// and serve later as twig templates.

let babel = require('@babel/core');
let fs = require('fs');
const ReactDomServer = require ('react-dom/server');
const fs = require('fs');
const App = require('./../build/ui_shell');

const html = ReactDomServer.renderToString(App());
fs.writeFile("./../page.html.twig", html, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
