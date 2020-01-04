function processBlock(rootBlock) {
  var term = {};
  var blocks = [rootBlock].concat(rootBlock.blocks);
  blocks.forEach(_blk => {
    term[_blk.name] = _blk.body.trim();
  });
  return '<div class="terminull">' +
          '<div class="terminullMenu">' +
            '<div class="terminullButtons terminullClose"></div>' +
            '<div class="terminullButtons terminullMinimize"></div>' +
            '<div class="terminullButtons terminullZoom"></div>' +
          '</div>' +
          '<div class="terminullScreen">' +
            '<span class="terminullDirectory">~/' + term.directory + '</span>$ ' +
            '<span class="terminullCommand">' + term.command + '</span>' +
            '<span class="terminullOutput">' + term.output + '</span>' +
          '</div>'+
        '</div>';
}

module.exports = {
  website: {
    assets: './assets',
    css: ['terminull.css'],
    js: ['terminull.js']
  },
  blocks: {
    term: {
      blocks: ['directory', 'command', 'output'],
      process: processBlock
    }
  }
};
