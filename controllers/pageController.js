exports.getHomePage = (req, res) => {
    res.render('index');
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getToDoListPage = (req, res) => {
    res.render('to-do-list');
};
