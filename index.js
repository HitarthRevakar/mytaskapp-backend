const express = require('express');
require('dotenv').config();
const todoRoutes = require('./routes/todoRouter');
const cors = require('cors');


const app = express();
app.use(cors({
  origin: ["http://localhost:5173", `${FRONTEND_URL}`],
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





