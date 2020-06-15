import { configure, setAddon } from "@storybook/react";
import interoprequiredefault from "@babel/runtime/helpers/interopRequireDefault";
import JSXAddon from "storybook-addon-jsx";
import "../src/sass/materialize.scss";

function loadStories() {
  const context = require.context("../src/stories", true, /Story\.js$/);
  context.keys().forEach((srcFile) => {
    interoprequiredefault(context(srcFile));
  });
}

setAddon(JSXAddon);
configure(loadStories, module);
