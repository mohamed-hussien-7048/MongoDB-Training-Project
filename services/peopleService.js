

const Person = require("../models/Person");

async function getAllPeople() {
    return Person.find().sort({ createdAt: -1 });
}

async function createPerson(name, balance) {
    return Person.create({ name, balance });
}

async function updatePerson(id, name, balance) {
    return Person.findByIdAndUpdate(
        id,
        { name, balance },
        {
            new: true,
            runValidators: true
        }
    );
}

async function deletePerson(id) {
    const person = await Person.findByIdAndDelete(id);

    return Boolean(person);
}

module.exports = {
    getAllPeople,
    createPerson,
    updatePerson,
    deletePerson
};
