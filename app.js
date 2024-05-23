const express = require('express');
const path = require('path');
const app = express();
const toDoListRoutes = require('./routes/toDoListRoutes');
const pageRoutes = require('./routes/pageRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', toDoListRoutes);
app.use('/', pageRoutes);
app.use((req, res, next) => {
    res.status(404).render('404.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
