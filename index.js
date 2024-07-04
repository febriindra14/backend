const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const taskRoutes = require('./app/routes/task.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Tes');
});

app.use('/api/tasks', taskRoutes);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
