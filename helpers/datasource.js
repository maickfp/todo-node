// IMPORT NODE MODULES
// FILE SYSTEM
const fs = require('fs');
// PATH
const path = require('path');

// FILE FULLPATH
const dbFile = path.join( __dirname, '../db',' tasksList.json' );

// SAVE TASKS LISTS IN FILE (JSON)
const saveDB = ( data ) => {

    fs.writeFileSync( dbFile, JSON.stringify( data ) );

};

// READ TASKS LIST FROM FILE (JSON)
const readDB = () => {

    if( !fs.existsSync( dbFile ) ){
        return [];
    }

    return JSON.parse( fs.readFileSync( dbFile, { encoding: 'utf8' } ) );

};

module.exports = {
    saveDB,
    readDB
};