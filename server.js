import express from 'express';
import 'dotenv/config'

const app = express();
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/linja-nimi', (req, res) => {
  res.render('linja-nimi');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
