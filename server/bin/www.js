"use strict";
const app = require("../app");
const PORT = process.env.PORT || 3000;
const HOSTNAME = "localhost";

app.listen(PORT, HOSTNAME, () => {
    console.log(`\r
    Server running at 
    >>> http://${HOSTNAME}:${PORT} <<<
    `);
});
