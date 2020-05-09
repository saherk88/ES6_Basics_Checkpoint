const pets = [
    { name: "max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => {
    return new Date().getFullYear() - pet.bornOn;
}

pets.forEach((pet) =>pet.age = getAge(pet););
console.log(petsWithAge);



 const dogs = pets.filter(pets => pets.type === "dog")

console.log(dogs);
 const jasper =pets.find(pets => pets.name === "Jasper")

console.log(`Jasper is ${jasper.age} years old`);
