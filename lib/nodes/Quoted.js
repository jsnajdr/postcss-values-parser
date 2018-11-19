/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const Node = require('postcss/lib/node');

class Quoted extends Node {
  constructor(options) {
    super(options);
    this.type = 'quoted';
    [this.quote] = options.value;
  }
}

module.exports = Quoted;