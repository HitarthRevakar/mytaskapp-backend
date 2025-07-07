const express = require('express');
const todoRoutes = require('./routes/todoRouter');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const FRONTEND_LOCAL = process.env.FRONTEND_URL_LOCAL;
const FRONTEND_PRO = process.env.FRONTEND_URL_PRO

// ------------ to connect frontend and backend ----------- //
const cors = require('cors');
app.use(cors({
  origin: [`${FRONTEND_LOCAL}`,`${FRONTEND_PRO}`].filter(Boolean),
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





