import platform from './platform';
import _ from 'lodash';

// [platform=ios formFactor=handheld]
let matches = {
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
    return Ti.Platform.displayCaps.platformWidth;
  })(),
  height: (function(){
    return Ti.Platform.displayCaps.platformHeight;
  })()
}

// checks property, return true if query
function _isQuery(property) {
  return _.isArray(property.match(/\[([^\]]+)]/));
}

// parses query into object
function _parseQuery(query) {
  let queries = query.replace(/[\[\]']+/g,'').split(' ');
  return _.map(queries, function(query) {
    let pairs = query.match(/([A-Za-z]+)(>|>=|=|<=|<+)([0-9A-Za-z]+)/);

    return {
      type: pairs[1],
      comparator: pairs[2],
      value: pairs[3],
      active: false
    }
  });
}

function _dimensionQueryMaybeActive(query) {
  let dim = matches[query.type];
  let comp = query.comparator;
  let val = parseFloat(query.value);

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
  let queries = _parseQuery(query);

  return _.chain(queries)
    .each((query) => {
      if (query.type === 'formFactor' && query.value === matches.formFactor) {
        query.active = true;
      } else if (query.type === 'platform' && query.value === matches.platform){
        query.active = true;
      } else if (query.type === 'width' || query.type === 'height') {
        query.active = _dimensionQueryMaybeActive(query);
      }
    })
    .every('active')
    .value();
}

function _processQueries(styles) {
  let bracketsRx = /\[([^\]]+)]/;

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
  // Custom merge function ORs together non-object values, recursively
  // calls itself on Objects.
  var merger = function (a, b) {
    if (_.isObject(a)) {
      return _.merge({}, a, b, merger);
    } else {
      return a || b;
    }
  };


  // Allow roles to be passed to _.merge as an array of arbitrary length
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

export default processStyles;
