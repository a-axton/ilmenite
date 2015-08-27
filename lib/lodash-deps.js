// check for existing lodash module
try {
  var _ = require('lodash');
} 
// use individual modules to reduce
// bundled filesize for titanium module
catch(e) {
  var _ = {
    isArray: require('lodash.isarray'),
    isObject: require('lodash.isobject'),
    map: require('lodash.map'),
    each: require('lodash.foreach'),
    every: require('lodash.every'),
    merge: require('lodash.merge'),
    flatten: require('lodash.flatten'),
    invoke: require('lodash.invoke'),
    omit: require('lodash.omit')
  } 
}

module.exports = _;
