const express = require('express');
// pull in all functions from passport refactored to another file
require('.services/passport');
// define the app as a function of express to initialize it with express functions
const app = express();

// call in the function exported in authroutes and immediately call it with the app variable
require('.routes/authRoutes')(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);
