'use strict';

const stylelint = require('stylelint');
const stylelintFormatter = require('stylelint-formatter-pretty');

const CLIEngine = require('eslint').CLIEngine;
const formatter = CLIEngine.getFormatter('codeframe');

const paths = require('../config/paths');

let lintErrors;

const useCache = Boolean(
  process.env.NODE_ENV !== 'production' && !process.env.CI
);
const useFix = Boolean(
  process.env.NODE_ENV !== 'production' && !process.env.CI
);

async function lintCss() {
  try {
    await stylelint
      .lint({
        cache: useCache,
        files: `${paths.appSrc}/**/*.css`,
        fix: useFix,
        formatter: stylelintFormatter,
      })
      .then(function(data) {
        console.log(data.output);
        if (data.errored) {
          lintErrors = true;
        }
      })
      .catch(function() {
        lintErrors = true;
      });
  } catch (error) {
    throw error;
  }
}

async function lintJs() {
  try {
    const cli = new CLIEngine({
      cache: useCache,
      fix: useFix,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    });
    const report = await cli.executeOnFiles([`${paths.appSrc}/`]);
    console.log('errorCount ', report.errorCount);
    console.log('warningCount ', report.warningCount);
    const errorReport = await CLIEngine.getErrorResults(report.results);
    if (errorReport.length) {
      console.error(formatter(errorReport));
      lintErrors = true;
    }
    if (report.warningCount) {
      console.error(formatter(report.results));
    }
  } catch (error) {
    throw error;
  }
}

(async function() {
  try {
    await Promise.all([lintCss(), lintJs()]).then(function() {
      if (lintErrors) {
        throw new Error('Linting Error');
      }
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
