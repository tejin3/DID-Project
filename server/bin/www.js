"use strict";

const app = require("../app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server strared on Port 3000
    >>> http://localhost:3000 <<<
    `);
});
