
// CLEAR CONSOLE
console.clear();

// OTHERS

// OWN
// COLOR CONFIG
require('./config/colors');
// MESSAGES MODULE (MENU 0.1)
// const { 
    //     showMenu, 
    //     pause 
    // } = require('./helpers/messages');
// MENU MADE WITH inquirer
const { 
    showMainMenu,
    pause 
} = require('./helpers/menuInquirer');


// MAIN 
const main = async () => {

    let opt = '';

    do{

        // // MENU 0.1
        // opt = await showMenu();

        // console.log( opt );

        // if( opt !== '0' ){
        //     await pause();
        // }

        // MENU 0.2
        opt = await showMainMenu();

        console.log( opt );

        await pause();

    }while( opt !== '0' );


};

main();