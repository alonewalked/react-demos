/**
 * @fileOverview jQuery replacement
 * @author jasonslyvia
 */
'use strict';

function on(el, eventName, callback) {
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, false);
  }
  else if (el.attachEvent) {
    el.attachEvent('on'+eventName, (e) => {
      callback.call(el, e || window.event);
    });
  }
}

function off(el, eventName, callback) {
  if (el.removeEventListener) {
    el.removeEventListener(eventName, callback);
  }
  else if (el.detachEvent) {
    el.detachEvent('on'+eventName, callback);
  }
}

function isFunction(func) {
  return typeof func === 'function';
}

function isNumeric(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function position(el) {
  if (!el) {
    return {
      left: 0,
      top: 0
    };
  }

  return {
    left: el.offsetLeft,
    top: el.offsetTop
  };
}

function width(el) {
  return el.offsetWidth;
}

function height(el) {
  return el.offsetHeight;
}

function outerWidthWithMargin(el) {
  let _width = el.offsetWidth;
  const style = el.currentStyle || getComputedStyle(el);

  _width += (parseInt(style.marginLeft) || 0) + (parseInt(style.marginRight) || 0);
  return _width;
}

function outerHeightWithMargin(el) {
  let _height = el.offsetHeight;
  const style = el.currentStyle || getComputedStyle(el);

  _height += (parseInt(style.marginLeft) || 0) + (parseInt(style.marginRight) || 0);
  return _height;
}

function closest(el, className) {
  className = className.replace(/^[\b\.]/, '');
  const reg = new RegExp('\\b'+className+'\\b');

  const finder = (_el, _className) => {
    if (_el.className && _el.className.match(reg)) {
      return _el;
    }
    // matches document
    else if (_el.parentNode === null) {
      return null;
    }
    else {
      return finder(_el.parentNode, _className);
    }
  };

  return finder(el, className);
}

function assign (target) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  let to = Object(target);
  for (let i = 1; i < arguments.length; i++) {
    const nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    const keysArray = Object.keys(Object(nextSource));
    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      const nextKey = keysArray[nextIndex];
      const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}

function get(selector) {
  return document.querySelector(selector);
}

module.exports = {
  'on':on,
  'off':off,
  'isFunction':isFunction,
  'isNumeric':isNumeric,
  'position':position,
  'width':width,
  'height':height,
  'outerWidthWithMargin':outerWidthWithMargin,
  'outerHeightWithMargin':outerHeightWithMargin,
  'closest':closest,
  'assign':assign,
  'get':get
}