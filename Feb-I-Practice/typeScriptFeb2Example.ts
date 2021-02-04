interface Person{
    first: string;
    last: string;
    age: number;
    hobbies: Array<Hobby>; //Hobby[]
}

interface Hobby{
    name: string;
    years: number;
}

let me: Person = {
    first: "Will",
    last: "Smith",
    age: 25,
    hobbies: [{name: "Video Games", years: 16},
            {name: "Baseball", years: 13},
        ],

}

let otherPerson: Person;

otherPerson = {first: "Will", last: "Smith", age: 25, hobbies: []}
otherPerson.hobbies.push({name: "", years: 12});