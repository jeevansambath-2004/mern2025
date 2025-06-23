const express = require('express');
const dotenv = require('dotenv');
const router = require('./routers/egRouters');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT; 

// Connect to MongoDB
connectDB();
app.use(express.json()); 
app.use(router);
app.get('/get', (req, res) => {
    res.send('Get Route is Working')
});
app.post('/post', (req, res) => {
    res.send('Post Route is Working')
});
app.put('/put', (req, res) => {    
    res.send('Put Route is Working')
});
app.delete('/delete', (req, res) => {
    res.send('Delete Route is Working')
});
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})