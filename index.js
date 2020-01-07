var ejs = require('ejs');
const path = require('path');
const kramed = require('./src/kramed');

function processBlock(rootBlock) {
  var terminulls = [];
  var term = {};
  rootBlock.blocks.forEach(_blk => {
    if (term[_blk.name]) {
      terminulls.push(term);
      term = {};
    }
    term[_blk.name] = _blk.body.trim();
  });
  terminulls.push(term);
  return new Promise(function(resolve, reject) {
    ejs.renderFile(
      path.join(__dirname, './src/terminull.html.ejs'),
      { terminulls: terminulls },
      function(err, str) {
        if (err) {
          throw err;
        }
        resolve(str);
      }
    );
  });
}

function terminullBlock(text) {
  var contexts = [];
  var context = {};
  var lines = text.split('\n');
  lines.forEach(function(line) {
    if (line.indexOf('$') > -1 || lines.length == 1) {
      if (context.command) {
        contexts.push(context);
      }
      context = {};
      var command = line;
      if (line.indexOf('$') > -1) {
        context.directory = line.substring(0, line.indexOf('$')) || '';
        command = line.substring(line.indexOf('$') + 1, line.length);
      }
      context.command = command.split('#')[0];
      context.comment = command.split('#')[1] ? command.split('#')[1] : '';
    } else {
      context.output = context.output ? context.output + '\n' + line : line;
    }
  });
  contexts.push(context);
  var blocks = contexts.map(function(context) {
    return (
      `{% directory %}${context.directory || ''}{% command %}${
        context.command
      }{% comment %}${context.comment || ''}` +
      `{% output %} ${context.output || ''}`
    );
  });
  return '{% term %}' + [...blocks].join('\n') + '{% endterm %}';
}

function markdown2Tag(text) {
  var blockCode = terminullBlock(text);
  return {
    type: 'paragraph',
    text: blockCode
  };
}

module.exports = {
  website: {
    assets: './assets',
    css: ['terminull.css'],
    js: ['terminull.js']
  },
  blocks: {
    term: {
      blocks: ['directory', 'command', 'comment', 'output'],
      process: processBlock
    }
  },
  hooks: {
    'page:before': function(page) {
      if (page.type == 'markdown') {
        var lexed = kramed.lexer(page.content);
        lexed.forEach(function(section, index) {
          if (section.type === 'code' && section.lang === 'term') {
            lexed[index] = markdown2Tag(section.text);
          }
        });
        page.content = kramed.render(lexed);
      }
      return page;
    }
  }
};
