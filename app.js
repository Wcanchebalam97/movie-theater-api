//imports 
const express = require('express');
const app = express();
const port = 3000;

//import routes 
const userRoutes = require('.\routes\
usersRoutes');

const showRoutes = require ('\routes\showsRoutes');

app.use(express.json());

//import simplified routes 
app.use('/users', userRoutes);
app.use('/shows', showRoutes);


//listening 
app.listen(port, () => {
    console.log('Server is listening at http://localhost:${port}')
})