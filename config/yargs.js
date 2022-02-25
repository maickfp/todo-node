
// IMPORT YARGS MODULE
const argv = require('yargs')
.options({
    'adm': {
        alias: 'administrator',
        desc: 'Start app in administrator mode',
        type: 'boolean',
        demandOption: false,
        default: false
    }
})
.check( ( argv, options ) => {

    const {
        adm
    } = argv;

    return true;

})
.argv;

module.exports = argv;