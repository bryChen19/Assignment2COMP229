const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

app.use(express.json());
mongoose.connect('mongodb+srv://bryanchenontario:cMmXPnT1LWnUEfj8@cluster0.fyygvlj.mongodb.net/Marketplace?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}) .then(() => {
    console.log('Connected');
}).catch(err => {
    console.error('Connection error:', err);
});

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

app.get('/', (req, res) => {
    res.send(`"{message}":"Welcome to DressStore application`);
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
