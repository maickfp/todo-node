
// CLEAR CONSOLE
console.clear();

// OTHERS MODULES

// OWN MODULES
// DATASOURCE MANAGE
const { 
    saveDB,
    readDB
} = require('./helpers/datasource');
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
// IMPORT TASKS MODEL
const Tasks = require('./models/tasks');


// DEFINE MAIN 
const main = async () => {

    let opt = '';
    // INIT TASKS MODEL
    const tasks = new Tasks( readDB() );

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

                const tasksListArr = tasks.listArr;
                if( tasksListArr.length === 0 ){
                    console.log( 'No existen tareas para mostrar'.warning );
                }else{
                    console.log( tasksListArr );
                }

                break;
        }

        // SAVE TASKS LIST
        saveDB( tasks.listArr );

        // PAUSE
        await pause();

    }while( opt !== '0' );

    // CLEAR CONSOLE
    console.clear();


};

// EXEC MAIN
main();