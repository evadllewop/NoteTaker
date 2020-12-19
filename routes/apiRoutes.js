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

    if (err) throw err;

    router.get("/api/notes", function (req, res) {
        res.json(notes);
    });

    router.post("/api/notes", function (req, res) {

        notes.push(req.body);
        res.json(notes);
        // notes.id = uuid;
    });

    router.delete("/api/notes/:id", function (req, res) {
        notes.splice(req.body[req.params.id]);
        res.json(notes);
        console.log(req.params.id);
    });

});

module.exports = router;