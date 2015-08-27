var definitions = require('./definitions');
var _ = require('../lodash-deps');

// convert constant string to actual constant object
function extractConstant(constant) {
  var extractedConstant = Titanium;
  
  // split up constant objects
  constant = constant.split('.');
  constant.shift();

  // apply constant parts back to Ti object
  _.each(constant, function(part) {
    // Ti.API.info(part)

    extractedConstant = extractedConstant[part];
  });
  
  // Ti.API.info('extracted ' + extractedConstant)

  return extractedConstant;
}

function applyShortcuts(styles) {
  var properties = _.pluck(definitions, 'property');

  // look for property matches
  _.each(styles, function(value, property) {
    if (properties.indexOf(property) > -1) {
      var matches = _.where(definitions, {property: property});
      
      // iterate over found shortcuts
      // applies constant if shortcut is found
      _.each(matches, function(match) {
        _.each(match.shortcuts, function(shortcut) {
          if (value === shortcut.value) {
            styles[property] = extractConstant(shortcut.represents);
          }
        });
      });
    }
  });

  return styles;
}

module.exports = {
  apply: applyShortcuts
};
