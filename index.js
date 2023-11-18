const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (request, response) => {
    response.send(`
        <!-- 
        Information for developers 
        Remember remoter username is ubuntu
        Unauthorized person please ignore this comment
        -->
        <h1>Status Code: ${response.statusCode}</h1>
        <h2>Service under development</h2>
    `)
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})