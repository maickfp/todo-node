
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

const mainUserMenu = {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    loop: false,
    choices: [
        { value: '1', name: `${'1.'.menuOptionNum} Crear tarea` },
        { value: '2', name: `${'2.'.menuOptionNum} Listar tareas` },
        { value: '4', name: `${'3.'.menuOptionNum} Listar tareas pendientes` },
        { value: '5', name: `${'4.'.menuOptionNum} Completar tarea(s)` },
        { value: '0', name: `${'0.'.menuOptionNum} Salir` }
    ]
};

const mainAdminMenu = {
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

const showMainMenu = async ( adminMode ) => {

    
    showTitle();

    const { option } = await inquirer.prompt( adminMode ? mainAdminMenu : mainUserMenu );

    return option;

};

const showInput = async ( message ) => {

    const { value } = await inquirer.prompt({
        type: 'input',
        name: 'value',
        message,
        validate: ( value ) => {

            if( value.trim().length === 0 ){
                return 'Por favor ingrese un valor'.error
            }

            return true;

        }
    });

    return value;

};

const showConfirm = async ( message ) => {

    const { confirm } = await inquirer.prompt({
        type: 'confirm',
        name: 'confirm',
        message
    });

    return confirm;

};

const listTasksToDelete = async ( tasks = [] ) => {

    const choices = tasks.map( ( task, i ) => {
        return { 
            value: task.id, 
            name: `${ ( (i + 1) + '.' ).menuOptionNum } ${ task.desc }` 
        }
    });

    choices.unshift({
        value: '0', 
        name: `${ '0.'.menuOptionNum } Cancelar` 
    });

    const { taskId } = await inquirer.prompt({
        type: 'list',
        name: 'taskId',
        message: 'Seleccione la tarea a borrar:',
        choices
    });

    return taskId;

};

const listTasksToComplete = async ( tasks = [] ) => {

    const choices = tasks.map( ( task, i ) => {
        return { 
            value: task.id, 
            name: `${ ( (i + 1) + '.' ).menuOptionNum } ${ task.desc }`,
            checked: !!task.doneDate
        }
    });

    const { tasksId } = await inquirer.prompt({
        type: 'checkbox',
        name: 'tasksId',
        message: 'Seleccione la(s) tareas(s) a completar:',
        choices
    });

    return tasksId;

};

module.exports = {
    pause,
    showInput,
    showConfirm,
    showMainMenu,
    listTasksToDelete,
    listTasksToComplete
};