const express = require('express'),
        router = express.Router(),
        app = express();

const host = '127.0.0.1';
const port = 7000;

router.get('/books', (req, res) => {
    console.log(req.path);
});

app.use('/api', router);

app.listen(port, host, () => console.log(`Server listens http://${host}:${port}`));
