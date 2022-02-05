
// OTHERS
const inquirer = require('inquirer');

// PRINT TITLE ON CONSOLE
const showTitle = () => {

    // CLEAR CONSOLE
    console.clear();

    // SHOW TITLE
    console.log('==========================='.menuTitleLine);
    console.log('         TO DO APP         '.menuTitleText);
    console.log('===========================\n'.menuTitleLine);

};

// PAUSE METHOD
const pause = async () => {

    console.log('\n');

    return await inquirer.prompt({
        type: 'input',
        name: 'pause',
        message: `Presione ${ 'ENTER'.attention } para continuar`
    });

};

const mainMenu = {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    loop: false,
    choices: [
        { value: '1', name: `${'1.'.menuOptionNum} Crear tarea` },
        { value: '2', name: `${'2.'.menuOptionNum} Listar tareas` },
        { value: '3', name: `${'3.'.menuOptionNum} Listar tareas completadas` },
        { value: '4', name: `${'4.'.menuOptionNum} Listar tareas pendientes` },
        { value: '5', name: `${'5.'.menuOptionNum} Completar tarea(s)` },
        { value: '6', name: `${'6.'.menuOptionNum} Borrar tarea` },
        { value: '0', name: `${'0.'.menuOptionNum} Salir` }
    ]
};


const showMainMenu = async () => {

    
    showTitle();

    const { option } = await inquirer.prompt( mainMenu );

    return option;

};

module.exports = {
    pause,
    showMainMenu
};