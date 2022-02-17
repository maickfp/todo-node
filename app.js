
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
    pause,
    showInput,
    showConfirm,
    showMainMenu,
    listTasksForDelete
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

                tasks.listAll();

                break;

            // LIST COMPLETED TASKS
            case '3':

                tasks.listByStatus( true );

                break;

            // LIST PENDING TASKS
            case '4':

                tasks.listByStatus( false );

                break;

            // DELETE TASK
            case '6':

                const taskId = await listTasksForDelete( tasks.listArr );

                if( taskId === '0' ){
                    console.log( `Se ha cancelado el proceso de borrado`.warning );
                    break;
                }

                const confirm = await showConfirm('¿Está segur@ que desea borrar la tarea seleccionada?');

                if( !confirm ){
                    console.log( `Se ha cancelado el proceso de borrado`.warning );
                    break;
                }

                const taskDeleted = tasks.deleteTask( taskId );

                if( taskDeleted ){
                    console.log( `¡Tarea borrada!`.success );
                }else{
                    console.log( `No se ha borrado la tarea seleccionada`.error );
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