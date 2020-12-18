
// logic to manipulate db.json
const fs = require('fs')
const util = require('util')

const uuid = require('uuid')

const readDB = util.promisify(fs.readFile);
const writeDB = util.promisify(fs.writeFile);

class DB {

    // returns all existing notes on db.json
    getNotes() {
        return readDB('db/db.json', 'utf-8').then(function (notes) {
            return JSON.parse(notes)
        })
    }
    // add a new note 
    addNote(noteData) {
        const newNote = {
            title: noteData.title,
            text: noteData.text,
            id: uuid
        }
        return this.getNotes()
            .then(function (notes) {
                [...notes, newNote]
            })
            .then(function (updatedNotes) {
                writeDB('db/db.json', 'utf-8')
                    .then(function (updatedNotes) {
                        return newNote;
                    })
            })
    }
}

module.exports = new DB();