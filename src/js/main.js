const util = require('./modules/util.js');
const page = window['page'] || {};


page.getMediaCardWidth = () => {'use strict';
    return util.sassVar('mediaCardWidth');
};

page.getMediaCardMargin = () => {
    return util.sassVar('mediaCardMargin');
};


module.exports = page;
