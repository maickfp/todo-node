// IMPORT OTHERS MODULES
const Table = require('cli-table');

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

    listAll(){

        const tasksTable = new Table({
            head: ['Num', 'Descripción', 'Estado' ],
            colAligns: [ 'middle', 'left', 'middle' ],
            colWidths: [ 5, 60, 15 ],
            colors: true,
            style: {
                "padding-left": 1,
                "padding-right": 1,
                head: ['bgBlue'],
                border: ['blue']
            }
        });

        const tasksListArr = this.listArr;
        if( tasksListArr.length === 0 ){
            console.log( 'No existen tareas para mostrar'.warning );
        }else{
            
            tasksListArr.map( ( task, i ) => {

                const taskStatus = task.doneDate ? 
                    'Compleatada'.taskComleted
                    :
                    'Pendiente'.taskPending;

                tasksTable.push( [ i + 1, task.desc, taskStatus ] );

            });

            console.log( tasksTable.toString() );

        }

    }

}

module.exports = Tasks;