const express = require('express');
const app = express();
const port = 8080
// Permettre la discussions entre fichier
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Relier les routes avec app.js
app.use("/router", require("./router/routes"));

// relier le frontend avec le serveur
app.use(express.static(path.join(__dirname, '../frontend')));
// lancer le serveur
app.listen(port, () => {
    console.log(`Serveur listening on port ${port}`)
});
