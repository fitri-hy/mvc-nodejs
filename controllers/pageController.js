exports.getHomePage = (req, res) => {
    res.render('index', { 
		seoTitle: 'HyTech MVC - Javascript (Model, Views, Controllers)',
		seoDesc: 'HyTech MVC JavaScript is a framework designed to simplify the development of JavaScript-based web applications by implementing the Model-View-Controller (MVC) architectural pattern.',
		seoKeyword: 'mvc, hytech, javascript, framework'
	});
};

exports.getAboutPage = (req, res) => {
    res.render('about', { 
		seoTitle: 'About - HyTech MVC',
		seoDesc: 'HyTech MVC JavaScript is a framework designed to simplify the development of JavaScript-based web applications by implementing the Model-View-Controller (MVC) architectural pattern.',
		seoKeyword: 'mvc, hytech, javascript, framework'
	});
};

exports.getToDoListPage = (req, res) => {
    res.render('to-do-list');
};
