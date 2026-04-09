import express from 'express';
const app = express();
// --- INICIALIZAÇÃO DO SERVIDOR ---
const PORTA = 3000;
app.use(express.json());

// Base de dados -> Simulação de dados de um banco de dados
let pets = [
 { id: 1, nome: "Paçocão", especie: "Cão", raça: "Labrador", idade: 3 },
 { id: 2, nome: "Frajola", especie: "Gato", raça: "SRD", idade: 5 }
];

// Configurando urls
app.get('/pets', (req, res) => {
    res.status(200).json(pets)
});

app.get('/pets/:id', (req, res) => {
    const id = req.params.id
    const pet = pets.find(p => p.id === Number(id))
    if(!pet) {
        return res.status(404).json({ mensagem: "Pet não encontrado!" });
    }

    res.status(200).json(pet)
})

// Criando rota para adicionar um Pet
app.post('/pets', (req, res) => {
    const {nome, especie, raca, idade} = req.body
    const newPet = {id: pets.length + 1, nome, especie, raca, idade}

    pets.push(newPet)
    res.status(201).json(newPet)
})

// Criando rota para modificar - PUT
app.put('/pets/:id', (req, res) => {
    const { id } = req.params;
    const index = pets.findIndex(p => p.id === Number(id));

    if (index === -1) return res.status(400).json({"mensagem": "PET não encontrado"})

    pets[index] = {id: Number(id), ...req.body};
    res.json(pets[index]);
});


app.listen(PORTA, () => {
 console.log(`🐾 API PetShop online na porta ${PORTA}`);
});