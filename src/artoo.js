;(function(undefined) {
  'use strict';

  /**
   * artoo core
   * ===========
   *
   * The main artoo namespace and its vital properties.
   */

  // Checking whether a body exists
  var body;
  if ('document' in this) {
    body = document.getElementsByTagName('body')[0];
    if (!body) {
      body = document.createElement('body');
      document.documentElement.appendChild(body);
    }
  }

  // Main object
  var artoo = {

    // Standard properties
    $: {},
    jquery: {
      plugins: []
    },
    mountNode: body,
    stylesheets: {},
    templates: {},

    // Emitter shim properties
    _enabled: true,
    _children: [],
    _handlers: {},
    _handlersAll: []
  };

  // Non-writable version
  Object.defineProperty(artoo, 'version', {
    value: '0.3.0'
  });

  // Exporting to global scope
  this.artoo = artoo;
}).call(this);
