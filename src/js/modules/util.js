const styles = require('../../sass/_variables.scss');
const util   = {};


util.testConfig = () => {'use strict';
    console.log(JSON.stringify(styles));
}

util.sassVar = name => styles[name];


module.exports = util;
