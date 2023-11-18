const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.send(`
        <h1>Status Code: ${response.statusCode}</h1>
        <h2>Hello my dear friend!!!</h2>
        <h2>You are so welcome on this site</h2>
        <h2>Please don't hesitate to explore it</h2>
        <a href=/hi/hi.txt>Hi</a>
    `)
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})