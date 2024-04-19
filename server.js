const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/index');


app.set('view engine', 'ejs');

app.use(express.static('public')); // Global middleware
app.use('/', mainRouter);
// app.use(apiKeyMiddleware); // Global Custom Middleware

// app.get('/', (req, res) => {
//     // res.send('Hello Node');
//     // res.send('<h1>Hello Node</h1>');

//     //Send File in response
//     // res.sendFile(path.resolve(__dirname) + '/public/index.html');

//     // Response html dynamic data using ejs template engine 
//     res.render('index', {
//         title: "My Home Page"
//     });
// });

// app.get('/about', (req, res) => {
//     // res.sendFile(path.resolve(__dirname) + '/public/about.html');

//     res.render('about', {
//         title: "My About"
//     });
// });

// app.get('/download', (req, res) => {
//     res.download(path.resolve(__dirname) + '/public/readme.txt');
// });


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
});