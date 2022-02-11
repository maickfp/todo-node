const colors = require('colors');

colors.setTheme({
    success: ['bgGreen', 'black'],
    error: ['bgRed', 'black'],
    warning: ['bgYellow', 'black'],
    info: ['bgCyan', 'black'],

    taskComleted: ['green'],
    taskPending: ['red'],

    attention: ['magenta'],

    menuTitleLine: ['blue'],
    menuTitleText: ['bgBlue'],
    menuOptionNum: ['blue']
});

module.exports = colors;