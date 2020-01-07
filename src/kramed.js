var kramed = require('kramed');
var renderer = require('kramed-markdown-renderer');

function render(lexed) {
  var options = Object.create(kramed.defaults);
  options.escape = false;
  options.renderer = renderer();
  return kramed.parser(lexed, options);
}

function lexer(content) {
  var options = Object.create(kramed.defaults);
  options.escape = false;
  return kramed.lexer(content, options);
}

module.exports = {
  render: render,
  lexer: lexer
};
