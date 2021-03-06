// Declaration
var express = require('express');
var app = express();
var port = 1337;
var bodyParser = require('body-parser');
var path = require('path');
var expressSession=require('express-session');





var home = require('./controllers/home');
var login = require('./controllers/login');
var logout = require('./controllers/login');
var registration = require('./controllers/registration');
var checkUser=require('./controllers/uniqueuser');
var admin = require('./controllers/admin');

var productlist = require('./controllers/productlist');
var productdetail = require('./controllers/detail');
var cart = require('./controllers/cart');

var insetProduct = require('./controllers/insertProduct');
var checkout = require('./controllers/checkout');
var viewprofile = require('./controllers/viewprofile');
var editprofile = require('./controllers/editprofile');
var userLogout = require('./controllers/userLogout');



// Configure
app.set('view engine', 'ejs');

// Middlewares
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './Asset')));
app.use(expressSession({secret: 'My top secret key', saveUninitialized: true, resave: false}));

/*
app.all('*',function(req,res,next){

	if(req.url=='/login' ||req.url=='/' ||req.url=='/registration' || req.url=='/checkUser/email' || req.url=='/checkUser/username')
	{
		next();
		return;
	}
	/*if(req.session.loggedUser==null)
	{
		res.redirect('./login');
	}
	else
	{
		next();
	}
});

*/
//// Route
//app.use('/login', login);
app.use('/home', home);
app.use('/registration', registration);
app.use('/uniqueuser',checkUser);
app.use('/login',login);
app.use('/logout',logout);
app.use('/admin',admin);
app.use('/productlist',productlist);
app.use('/detail',productdetail);
app.use('/cart',cart);
app.use('/product',insetProduct);
app.use('/product',insetProduct);
app.use('/checkout',checkout);
app.use('/viewprofile',viewprofile);
app.use('/editprofile',editprofile);
app.use('/userLogout',userLogout);


// Server startup
app.listen(port, function(){
	console.log('server started at port ' + port);
});