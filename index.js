const express = require('express');
require('dotenv').config();
const todoRoutes = require('./routes/todoRouter');
const cors = require('cors');


const app = express();
app.use(cors({
    origin: ["http://localhost:5173",'https://mytaskapp-frontend.vercel.app/'],
    credentials: true
}));

app.use(express.json());

// GET Data 
app.use('/', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))





