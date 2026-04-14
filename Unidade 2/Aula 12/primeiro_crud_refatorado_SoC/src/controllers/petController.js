import {pets} from '../data/petData.js';

// Exportando pets
export const listarPets = (req, res) => {
    res.status(200).json(pets)
}

export const buscarPetPorId = (req, res) => {
    const {id} = req.params;
    const pet = pets.find(p => p.id === Number(id))

    if(!pet) {
        return res.status(404).json({mensagem: "Pet não encontrado"});
    }

    res.status(200).json(pet);
}

export const criarPet = (req, res) => {
    const newPet = {id: Date.now(), ...req.body};
    pets.push(newPet)
    res.status(201).json(newPet)

}

export const putPet = (req, res) => {
    const {id} = req.params;
    const index = pets.findIndex(p => p.id === Number(id))

    if (index === -1) {
        return res.status(404).json({mensagem: "Pet não encontrado"})
    }

    pets[index] = {id: Number(id), ...req.body};

}


