/* global process */

import createConfig from './rollup-tools/base-config';
import { serve } from './rollup-tools/config-tools';

var vats = ['transport'];

// Inspired by https://github.com/Tom-Siegel/multi-page-svelte/blob/5dd47f9ffe3cbddbaa5e29be5056ce1ed56060b2/rollup-pages.config.js#L45
var configs = vats
  .map((v) => ({
    input: `vats/${v}/${v}.ts`,
    outputFile: `vats/${v}/${v}-bundle.js`,
    reloadPath: `vats/${v}`,
    serve: process.env.APP === v && serve,
    serveOpts: { rootDir: '.', serveDir: `vats/${v}` },
  }))
  .map(createConfig);

export default configs;
