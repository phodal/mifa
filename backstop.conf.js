'use strict'
const config = {
    viewports: [{
        name: 'phone',
        width: 320,
        height: 480
    }, {
        name: 'laptop',
        width: 1280,
        height: 800
    }],
    scenarios: [{
        label: 'Typography',
        url: 'http://localhost:3000',
        hideSelectors: [],
        removeSelectors: [],
        selectors: ['#typography.example'],
        readyEvent: null,
        delay: 500,
        misMatchThreshold: 0.1,
        onReadyScript: null,
        onBeforeScript: null
    }, {
        label: 'Color',
        url: 'http://localhost:3000',
        hideSelectors: [],
        removeSelectors: [],
        selectors: ['#color.example'],
        readyEvent: null,
        delay: 500,
        misMatchThreshold: 0.1,
        onReadyScript: null,
        onBeforeScript: null
    }],
    paths: {
        bitmaps_reference: 'test/regression',
        bitmaps_test: 'node_modules/backstopjs/.tmp/bitmaps_test',
        casper_scripts: 'node_modules/backstopjs/.tmp/casper_scripts',
        html_report: 'node_modules/backstopjs/.tmp/html_report',
        ci_report: 'node_modules/backstopjs/.tmp/ci_report'
    },
    engine: 'phantomjs',
    report: [
        'browser',
        'CLI',
        'CI'
    ],
    casperFlags: [],
    debug: false,
    port: 3002
}

module.exports = config
