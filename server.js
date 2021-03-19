//------->server.js file

const express = require('express');
const app = express();
const route = require('./routes/route');
const PORT = process.env.PORT || 8080;

    //set view engine
    app.set('view engine','ejs');

    //set home route
    app.use(route);

    //use static resources, load css.
    app.use(express.static('./'))

    //listen port
    app.listen(PORT, ()=>{
    console.log(`Server running \nhttp://localhost:${PORT}/`)
    });