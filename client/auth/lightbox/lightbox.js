/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*globals define*/

define([
], function () {
  'use strict';

  function createElement(window, type, attributes) {
    var el = window.document.createElement(type);

    for (var attribute in attributes) {
      el.setAttribute(attribute, attributes[attribute]);
    }

    return el;
  }

  function cssPropsToString(props) {
    var str = '';

    for (var key in props) {
      str += key + ':' + props[key] + ';';
    }

    return str;
  }


  function Lightbox(options) {
    options = options || {};

    this._window = options.window;
  }

  Lightbox.prototype = {
    load: function (src) {
      var background = this._backgroundEl = createElement(this._window, 'div', {
        style: cssPropsToString({
          background: 'rgba(0,0,0,0.5)',
          bottom: 0,
          left: 0,
          position: 'fixed',
          right: 0,
          top: 0
        })
      });

      var iframe = createElement(this._window, 'iframe', {
        id: 'fxa',
        src: src,
        width: '600',
        height: '400',
        allowtransparency: 'true',
        border: '0',
        style: cssPropsToString({
          background: 'transparent',
          border: 'none',
          display: 'block',
          height: '600px',
          margin: '0 auto 0 auto',
          position: 'relative',
          top: '10%',
          width: '400px'
        })
      });

      background.appendChild(iframe);
      this._window.document.body.appendChild(background);

      this._iframe = iframe;
      this._contentWindow = iframe.contentWindow;
    },

    getContentElement: function () {
      return this._iframe;
    },

    getContentWindow: function () {
      return this._contentWindow;
    },

    isLoaded: function () {
      return !! this._backgroundEl;
    },

    unload: function () {
      if (this._backgroundEl) {
        this._window.document.body.removeChild(this._backgroundEl);
        delete this._backgroundEl;
        delete this._iframe;
      }
    }
  };

  return Lightbox;
});

