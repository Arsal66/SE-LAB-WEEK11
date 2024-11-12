const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const productRoutes = require('./routes/Products'); 




// Middleware to parse JSON data
app.use(express.json());

// Add authentication routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

// Use the product routes for the '/products' endpoint
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// app.get('/', (req, res) => {
//     res.send('Hello, World! The server is running.');
// });


mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));




// This code initializes an Express app, listens on port 5000, and logs a message when the server starts.