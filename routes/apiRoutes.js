// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// =============================================================================

const fs = require('fs');
const router = require('express').Router();
let notes = [];
// const uuid = require("uuid");

// ===============================================================================
// ROUTING
// ===============================================================================

fs.readFile("db/db.json", "utf8", (err, data) => {

    router.get("/api/notes", function (req, res) {

        if (err) throw err;
        res.json(notes);
        // res.json(JSON.parse(data));
    });

    router.post("/api/notes", function (req, res) {

        if (err) throw err;
        // const notes = JSON.parse(data);
        var note = req.body;
        // note.id = notes.length + 1;
        notes.push(note);
        res.json(notes);
    });

    router.delete("/api/notes/:id", function (req, res) {
        var note = req.body;
        notes.splice(note[req.params.id]);
        res.json(notes);
        console.log(req.params.id);

    });

});

module.exports = router;