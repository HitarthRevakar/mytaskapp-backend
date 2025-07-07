require('dotenv').config();
const express = require('express');
const todoRoutes = require('./routes/todoRouter');
const app = express();

// ------------ to connect frontend and backend ----------- //
const cors = require('cors');
app.use(cors({
  origin: [process.env.FRONTEND_URL_LOCAL, process.env.FRONTEND_URL_PRO],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use(express.json());

//public
app.use(express.static('public'));

// main route 
app.use('/', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))





