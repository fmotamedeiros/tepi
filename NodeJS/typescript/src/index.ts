type Person = {
    name: string;
    age: number;
};

const people: Person[] = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Caroline", age: 15 },
    { name: "David", age: 28 },
];

const isAdult = (person: Person) => person.age >= 18;

const adults: Person[] = people.filter(isAdult);

console.log(adults);