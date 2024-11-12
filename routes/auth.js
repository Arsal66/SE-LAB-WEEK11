const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const router = express.Router();

// Signup route
// This code checks the user’s credentials and, if valid, logs them in.
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
});

module.exports = router;





// Login route
// This code checks the user’s credentials and, if valid, logs them in.
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user });
});