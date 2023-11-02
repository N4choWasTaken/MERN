const express = require('express');

const app = express();

const authRoutes = require('./routes/auth.ts')

app.use('/auth', authRoutes);

const port = 8000;

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
});
