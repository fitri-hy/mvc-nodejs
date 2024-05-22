const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');
const pageRoutes = require('./routes/pageRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', itemRoutes);
app.use('/', pageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
