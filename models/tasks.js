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

    deleteTask( id = '' ){
        
        if( !this._list[ id ] ){
            console.log( `No existen tarea con id ${ id.attention } para borrar`.warning );
        }else{
            delete this._list[ id ];
        }

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

        this.listArr.map( ( task, i ) => {

            const taskStatus = task.doneDate ? 
                'Compleatada'.taskComleted
                :
                'Pendiente'.taskPending;

            tasksTable.push( [ i + 1, task.desc, taskStatus ] );

        });

        if( tasksTable.length === 0 ){
            console.log( 'No existen tareas para mostrar'.warning );
        }else{
            console.log( tasksTable.toString() );
        }

    }

    listByStatus( completed = true ){

        const tableOpts = completed ? 
        {
            head: ['Num', 'Descripción', 'Fecha' ],
            colAligns: [ 'middle', 'left', 'middle' ],
            colWidths: [ 5, 60, 15 ]
        }
        :
        {
            head: ['Num', 'Descripción' ],
            colAligns: [ 'middle', 'left' ],
            colWidths: [ 5, 75 ]
        } ;

        const tasksTable = new Table({
            ...tableOpts,
            colors: true,
            style: {
                "padding-left": 1,
                "padding-right": 1,
                head: ['bgBlue'],
                border: ['blue']
            }
        });

        let i = 1;
        this.listArr.map( ( task ) => {

            const taskStatus = !!task.doneDate;

            if( taskStatus === completed ){
                
                const taskRow = completed ? 
                [ i , task.desc, task.doneDate ]
                :
                [ i , task.desc ];

                tasksTable.push( taskRow );
                i++;

            }

        });
            
        
        if( tasksTable.length === 0 ){
            console.log( 'No existen tareas para mostrar'.warning );
        }else{
            console.log( tasksTable.toString() );
        }

    }

}

module.exports = Tasks;