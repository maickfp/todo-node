
const showMenu = () => {

    return new Promise( resolve => {

        // CLEAR CONSOLE
        console.clear();
    
        // SHOW MENU TITLE
        console.log('==========================='.menuTitleLine);
        console.log('   Seleccione una opción   '.menuTitleText);
        console.log('===========================\n'.menuTitleLine);
    
        // LIST OPTIONS
        console.log(`${'1.'.menuOptionNum} Crear tarea`);
        console.log(`${'2.'.menuOptionNum} Listar tareas`);
        console.log(`${'3.'.menuOptionNum} Listar tareas completadas`);
        console.log(`${'4.'.menuOptionNum} Listar tareas pendientes`);
        console.log(`${'5.'.menuOptionNum} Completar tarea(s)`);
        console.log(`${'6.'.menuOptionNum} Boorar tarea`);
        console.log(`${'0.'.menuOptionNum} Salir\n`);
    
        // WAIT FOR INPUT OPTION
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Seleccione una opción: ', ( opt ) => {
            readline.close();
            resolve( opt );
        });

    });


};

const pause = () => {

    return new Promise( resolve => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.attention } para continuar\n`, () => {
            readline.close();
            resolve();
        });

    });

};

module.exports = {
    showMenu,
    pause
};