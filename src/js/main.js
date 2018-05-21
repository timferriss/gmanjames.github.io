const styles = require('../sass/_variables.scss');

const util = window['util'] || {};

util.testConfig = () => {'use strict';
    console.log(JSON.stringify(styles));
}

module.exports = util;
