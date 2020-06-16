const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const list = request.query;

    console.log('Projects:');
    console.log(list);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
})

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log('Project created:');
    console.log(body);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.put('/projects/:id', (request, response) => {
    const id = request.params;

    console.log("Project with Id:");
    console.log(id);
    console.log("//updated//");

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ]);
})

app.listen(3333, () => {
    console.log('⚡️ Backend started! ⚡️');
});