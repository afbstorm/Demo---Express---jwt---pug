const express = require('express');
const cookieParser = require('cookie-parser');
const UserRouter = require('./router/user.router');
const path = require('path');
const app = express();
const port = 8003;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())
app.use(UserRouter);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
});
