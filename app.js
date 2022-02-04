// CLEAR CONSOLE
console.clear();

// OTHERS

// OWN
// COLOR CONFIG
require('./config/colors');
// MESSAGES MODULE
const { 
    showMenu, 
    pause 
} = require('./helpers/messages');

// MAIN 
const main = async () => {

    let opt = '';

    do{

        opt = await showMenu();

        console.log( opt );

        if( opt !== '0' ){
            await pause();
        }

    }while( opt !== '0' );


};

main();