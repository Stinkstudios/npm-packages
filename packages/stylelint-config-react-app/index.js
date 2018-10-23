'use strict';

const noUnsupportedBrowserFeatures = require('./no-unsupported-browser-features');
const order = require('./order');
const propertiesOrder = require('./properties-order');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-no-unsupported-browser-features',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    /**
     * stylelint-declaration-block-no-ignored-properties
     */
    'plugin/declaration-block-no-ignored-properties': true,

    /**
     * stylelint-no-unsupported-browser-features
     */
    'plugin/no-unsupported-browser-features': noUnsupportedBrowserFeatures,

    /**
     * stylelint-order
     */
    'order/order': order,
    'order/properties-order': propertiesOrder,
  },
};
