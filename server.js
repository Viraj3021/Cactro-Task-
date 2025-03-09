require ('dotenv').config();
const express = require('express');
const githubRoutes = require('./src/routes/githubRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', githubRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);

app.get('/', (req, res) => {
    res.send('hello!');
}
);