exports.getAdminPage = (req, res) => {
    res.render('admin/index', { 
		siteTitle: 'HyTech',
		seoTitle: 'Dashboard - HyTech',
		seoDesc: 'HyTech MVC JavaScript is a framework designed to simplify the development of JavaScript-based web applications by implementing the Model-View-Controller (MVC) architectural pattern.',
		seoKeyword: 'mvc, hytech, javascript, framework'
	});
};