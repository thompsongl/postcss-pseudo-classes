var assert    = require('assert');
var fs        = require('fs');
var postcss   = require('postcss');
var pseudoclasses = require('..');

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}

describe('postcss-pseudo-classes', function() {
  it('should add proper pseudoclass selectors', function() {
    var output = postcss()
                .use(pseudoclasses())
                .process(fixture('source.css')).css;
    var expected = fixture('source.expected.css');

    assert.equal(output, expected);
  });

  it('should add all combinations (slower) of pseudoclass selectors if allCombinations is set to true', function() {
    var output = postcss()
              .use(pseudoclasses({ allCombinations: true }))
              .process(fixture('source.css')).css;
    var expected = fixture('all-combinations.expected.css');

    assert.equal(output, expected);
  });
});
