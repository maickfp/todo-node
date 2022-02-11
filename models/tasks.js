
// IMPORT MY CLASSES
const Task = require('./task');

/*

    _listado:
        { 'uuid': {id:'uuid', desc: 'hola', doneDate:} }

*/
class Tasks{

    _list = {};

    // TASKS LIST ON ARRAY
    get listArr (){

        return Object.keys( this._list ).map( value => {
            return this._list[ value ];
        });

    }

    constructor( initTasksList = [] ){
        this._list = {};

        initTasksList.map( task => {
            this._list[ task.id ] = task;
        });

    }

    createTask( desc = '' ){

        const task = new Task( desc );
        this._list[ task.id ] = task;

    }

}

module.exports = Tasks;