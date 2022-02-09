
// IMPORT MY CLASSES
const Task = require('./task');

/*

    _listado:
        { 'uuid': {id:'uuid', desc: 'hola', doneDate:} }

*/
class Tasks{

    _listado = {};

    constructor(){
        this._listado = {};
    }

    createTask( desc = '' ){

        const task = new Task( desc );
        this._listado[ task.id ] = task;

    }

}

module.exports = Tasks;