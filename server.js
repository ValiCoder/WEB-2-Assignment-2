const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const weatherRoutes = require('./routes/weather');
app.use('/api/weather', weatherRoutes);

const exRatesRoutes = require('./routes/exrates');
app.use('/api/exrates', exRatesRoutes);

const newsRoutes = require('./routes/news');
app.use('/api/news', newsRoutes);

app.get("/", (req, res) => {
  res.send(`The server is running on port ${PORT}`);
});

app.get("/api/status", (req, res) => {
    res.json({status: "ok"})
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});