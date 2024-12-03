
const express = require('express');
const app = express();

app.use(express.json());

let clientes = [];
let carros = {};

//---------- Clientes:

//Busca todos os clientes cadastrados.

//Cadastra um novo cliente.
app.post('/clientes', (req, res) => {
    const { nome } = req.body;
    const { telefone } = req.body;

    let id = 0;
    clientes.fotEach(uclientes => {
        if (clientes.id > id) {
            id = clientes.id;
        }
    }) 
    clientes.push({ id : id + 1, nome, telefone});
    if(nome.legth >= 3){
        res.status(281).json({ message: 'Clientes cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'nome deve conter no mínimo 3 caracteres'})
    }
    if(nome.legth <= 100){
        res.status(281).json({ message: 'Clientes cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'nome deve conter no máximo 100 caracteres'})
    }
    if(telefone.legth = 11){
        res.status(281).json({ message: 'Clientes cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'telefone deve conter exatamente 11 dígitos'})
    }
    if(telefone.legth = Number){
        res.status(281).json({ message: 'Clientes cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'telefone deve conter apenas números'})
    }
});

//Busca um cliente específico pelo código.
app.get('/clientes/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    res.status(200).json(clientes.find(clientes.id === id));
});

//Atualiza as informações de um cliente.
app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    const { telefone } = req.body;
    const clientes = clientes.find(u => u.id === parseInt(id));
    if (clientes) {
        clientes.nome = nome;
        clientes.telefone = telefone;
        res.status(201).json({ message: 'Cliente atualizados com sucesso!'});
    } else {
        res.status(404).json({ message: 'Cliente não encontrado.'});
    }
});

//Remove um cliente pelo ID.
app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const index = clientes.findIndex(u => u.id === Number.parseInt(id));
    if(index !== -1) {
        clientes.splice(index, 1);
        res.status(200).json({ message: 'Cliente removido com sucesso!'});
    } else {
        res.status(404).json({ message: 'Cliente não encontrado.'});
    }
});


//---------- Carros:

//Cadastra um novo carro.
app.post('/carros', (req, res) => {
    const { marca } = req.body;
    const { modelo } = req.body;
    const { tamanho } = req.body;
    const { id_clientes } = req.body;

    let id = 0;
    carros.fotEach(ucarros => {
        if (carros.id > id) {
            id = carros.id;
        }
    }) 
    carros.push({ id : id + 1, marca, modelo, tamanho, id_clientes});
    if(marca.legth >= 3){
        res.status(281).json({ message: 'Carro cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'marca deve conter no mínimo 3 caracteres'})
    }
    if(marca.legth <= 50){
        res.status(281).json({ message: 'Carro cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'marca deve conter no máximo 50 caracteres'})
    }
    if(modelo.legth >= 2){
        res.status(281).json({ message: 'Carro cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'modelo deve conter no mínimo 2 caracteres'})
    }
    if(telefone.legth <= 50){
        res.status(281).json({ message: 'Carro cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'modelo deve conter no máximo 50 caracteres'})
    }
});

//Busca um carro específico pelo código.
app.get('/carros/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    res.status(200).json(carros.find(carros.id === id));
});

//Atualiza as informações de um carro.
app.put('/carros/:id', (req, res) => {
    const { id } = req.params;
    const { marca } = req.body;
    const { modelo } = req.body;
    const { tamanho } = req.body;

    const carros = carros.find(u => u.id === parseInt(id));
    if (carros) {
        carros.marca = marca;
        carros.modelo = modelo;
        carros.tamanho = tamanho;
        res.status(201).json({ message: 'Carro atualizado com sucesso!'});
    } else {
        res.status(404).json({ message: 'Carro não encontrado.'});
    }
});

//Remove um carro pelo ID.
app.delete('/carros/:id', (req, res) => {
    const { id } = req.params;
    const index = carros.findIndex(u => u.id === Number.parseInt(id));
    if(index !== -1) {
        carros.splice(index, 1);
        res.status(200).json({ message: 'Carro removido com sucesso!'});
    } else {
        res.status(404).json({ message: 'Carro não encontrado.'});
    }
});

//---------- Serviços:

//Cadastra um novo serviço.
app.post('/servicos', (req, res) => {
    const { descricao } = req.body;
    const { lavagem } = req.body;
    const { valor } = req.body;

    let id = 0;
    servicos.fotEach(uservicos => {
        if (servicos.id > id) {
            id = servicos.id;
        }
    }) 
    servicos.push({ id : id + 1, descricao, lavagem, valor});
    if(descricao.legth >= 5){
        res.status(281).json({ message: 'servico cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'descricao deve conter no mínimo 5 caracteres'})
    }
    if(descricao.legth <= 100){
        res.status(281).json({ message: 'servico cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'descricao deve conter no máximo 100 caracteres'})
    }
    if(valores.legth >= 0){
        res.status(281).json({ message: 'servico cadastrado com sucesso'});
    } else {
        res.status(404).json({message: 'O valor deve ser igual ou maior que 0'})
    }
});

//Busca um serviço específico pelo código.
app.get('/servicos/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    res.status(200).json(servicos.find(servicos.id === id));
});

//Atualiza as informações de um serviço.
app.put('/servicos/:id', (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
    const { lavagem } = req.body;
    const { valor } = req.body;

    const servicos = servicos.find(u => u.id === parseInt(id));
    if (servicos) {
        servicos.descricao = descricao;
        servicos.lavagem = lavagem;
        servicos.valor = valor;
        res.status(201).json({ message: 'serviço atualizado com sucesso!'});
    } else {
        res.status(404).json({ message: 'serviço não encontrado.'});
    }
});

//Remove um serviço pelo ID.
app.delete('/servicos/:id', (req, res) => {
    const { id } = req.params;
    const index = servicos.findIndex(u => u.id === Number.parseInt(id));
    if(index !== -1) {
        servicos.splice(index, 1);
        res.status(200).json({ message: 'serviço removido com sucesso!'});
    } else {
        res.status(404).json({ message: 'serviço não encontrado.'});
    }
});

//---------- Agendamentos:

//Cadastra um novo agendamento.
app.post('/agendamentos', (req, res) => {
    const { id_carros } = req.body;
    const { id_servicos } = req.body;
    const { data_hora } = req.body;

    let id = 0;
    agendamentos.fotEach(uagendamentos => {
        if (agendamentos.id > id) {
            id = agendamentos.id;
        }
    }) 
    agendamentos.push({ id : id + 1, id_carros, id_servicos, data_hora});
    res.status(281).json({ message: 'agendamento cadastrado com sucesso'});
});

app.listen(3000, () => {
    console.log('API rodando na porta 3000');
});