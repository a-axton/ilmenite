var platform = require('./lib/platform');
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

// [platform=ios formFactor=handheld]
var queryTypes = {
  platform: (function(){
    if (platform.isIOS) {
      return 'ios';
    } else if (platform.isAndroid) {
      return 'android';
    } else if (platform.isMobileWeb) {
      return 'mobileweb';
    }
  })(),
  formFactor: (function(){
    if (platform.isTablet){
      return 'tablet';
    } else {
      return 'handheld';
    }
  })(),
  width: (function(){
    return Ti.Platform.getDisplayCaps().width;
  })(),
  height: (function(){
    return Ti.Platform.getDisplayCaps().height;
  })(),
  density: (function(){
    return Ti.Platform.getDisplayCaps().density;
  })(),
  dpi: (function(){
    return Ti.Platform.getDisplayCaps().dpi;
  })()
}

// checks property, return true if query
function _isQuery(property) {
  return _.isArray(property.match(/\[([^\]]+)]/));
}

// parses query into object
function _parseQuery(query) {
  var queries = query.replace(/[\[\]']+/g,'').split(' ');
  
  return _.map(queries, function(query) {
    var queryParts = query.match(/([A-Za-z]+)(>|>=|=|<=|<+)([0-9A-Za-z]+)/);
    
    return {
      type: queryParts[1],
      comparator: queryParts[2],
      value: queryParts[3],
      active: false
    }
  });
}

function _dimensionQueryMaybeActive(query) {
  var dim = queryTypes[query.type];
  var comp = query.comparator;
  var val = parseFloat(query.value);

  if (comp === '=' && dim === val) {
    return true;
  } else if (comp === '>' && dim > val) {
    return true;
  } else if (comp === '>=' && dim >= val) {
    return true;
  } else if (comp === '<' && dim < val) {
    return true;
  } else if (comp === '<=' && dim <= val) {
    return true;
  } else {
    return false;
  }
}

// returns true if query is active
function _queryActive(query) {
  var queries = _parseQuery(query);
  var dimensionQueryTypes = ['width', 'height', 'dpi', 'density'];

  return _.every(_.each(queries, function(query) {
      if (query.type === 'formFactor' && query.value === queryTypes.formFactor) {
        query.active = true;
      } else if (query.type === 'platform' && query.value === queryTypes.platform){
        query.active = true;
      } else if (dimensionQueryTypes.indexOf(query.type) > -1) {
        query.active = _dimensionQueryMaybeActive(query);
      }
    }), 'active');
}

function _processQueries(styles) {
  // look for queries
  _.each(styles, function(value, property) {
    // if property is query
    if (_isQuery(property)){
      // query active, join styles
      if (_queryActive(property)){
        styles = _.merge(styles, styles[property]);
      }
      // remove query after joining
      styles = _.omit(styles, property);
    }
  });

  return styles;
}

function _mergeStyles(styles) {
  // custom merge function
  var merger = function (a, b) {
    if (_.isObject(a)) {
      return _.merge({}, a, b, merger);
    } else {
      return a || b;
    }
  };

  // process array of styles and merge
  var args = _.flatten([{}, styles, merger]);
  return _.merge.apply(_, args);
}

function processStyles(styles) {
  if (_.isArray(styles)) {
    styles = _mergeStyles(_.invoke(styles, function(){
      return _processQueries(this);
    }));
  } else {
    styles = _processQueries(styles);
  }

  return styles;
}

module.exports = processStyles;
