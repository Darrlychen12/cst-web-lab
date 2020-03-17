let express = require('express')
let session = require('express-session');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
const expressHbs = require('express-handlebars');
let loginRoute = require("./routes/index");

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));



app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // middleware

// parse application/json
app.use(bodyParser.json()) // middleware

app.use(loginRoute);

let artistRoutes = require('./routes/artists');

app.use(express.static(path.join(__dirname,'public')));

app.use(artistRoutes);

app.listen(process.env.PORT || 4000, () => console.log('Server ready'))
