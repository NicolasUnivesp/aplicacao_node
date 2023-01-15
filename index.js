const { request, response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ messsage: 'Server is up' });
})

app.listen(3333)