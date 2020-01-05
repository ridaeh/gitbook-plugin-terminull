var ejs = require('ejs');
const path = require('path');

function processBlock(rootBlock) {
  var terminulls = [];
  var term = {}
  rootBlock.blocks.forEach(_blk => {
    if(term[_blk.name]){
      terminulls.push(term)
      term = {}
    } 
    term[_blk.name] = _blk.body.trim();
  });
  terminulls.push(term)
  return new Promise(function(resolve, reject){
           ejs.renderFile(path.join(__dirname, './src/terminull.html.ejs'),{terminulls:terminulls},function(err, str){
             if(err) {
               throw err
             }
             resolve(str)
           })
        })
}

module.exports = {
  website: {
    assets: './assets',
    css: ['terminull.css'],
    js: ['terminull.js']
  },
  blocks: {
    term: {
      blocks: ['directory', 'command','comment', 'output'],
      process: processBlock
    }
  }
};
