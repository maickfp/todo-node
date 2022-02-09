
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
    pause,
    showInput
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');


// MAIN 
const main = async () => {

    let opt = '';
    // INIT TASKS MODEL
    const tasks = new Tasks();

    do{

        // SHOW MENU
        opt = await showMainMenu();

        switch (opt) {

            // EXIT
            case '0':
                console.log( '¡Vuelve pronto!'.info );
                break;
            // CREATE TASK
            case '1':

                const desc = await showInput('Ingrese descripción:');
                tasks.createTask( desc );

                console.log( '¡Tarea creada!'.success );
                
                break;

            // LIST TASKS
            case '2':

                if( Object.keys( tasks._listado ).length === 0 ){
                    console.log( 'No existen tareas para mostrar'.warning );
                }else{
                    console.log( tasks._listado );
                }

                break;
        }

        await pause();

    }while( opt !== '0' );


};

main();