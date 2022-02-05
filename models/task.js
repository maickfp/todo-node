
// OTHERS
const { v4: uuidv4 } = require('uuid');

class Task {

    id = '';
    desc = '';
    doneDate = null;

    constructor( desc ){

        this.id = uuidv4();
        this.desc = desc.trim();
        this.doneDate = null;

    }

}

module.exports = Task;