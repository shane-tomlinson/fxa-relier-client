/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Loads the Node FxaRelierClient for intern tests.

define([
  'intern/node_modules/dojo/node!../../node/index.js'
], function (FxaRelierClient) {
  return FxaRelierClient;
});