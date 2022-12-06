#! /usr/bin/env node

"use strict";

const fs = require("fs");

function randomRGB() {
  const min = 0,
    max = 255;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function content(name) {
  return `// @import "~/src/styles/variables.scss";

.${name[0].toLowerCase()}${name.slice(1)} {
  color: rbg(${randomRGB()}, ${randomRGB()}, ${randomRGB()});
}
`;

  //   return `@import "styles/design-guidelines.scss";`;
}
module.exports = {
  generate: function (name, path) {
    return fs.writeFileSync(path, content(name));
  },
};
