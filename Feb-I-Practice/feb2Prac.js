// ## Classes

// 1. Create a class that could be used to represent all animals. Provide it with the attributes that you see fit and a constructor that takes in information to provide said attributes. The class should also have at least one function that allows the animal to make a noise.
// 2. Create a two sub class of your animal class. One should represent as a cat and one should represent a snake. Re-evaluate the way you structured your parent class to see if any work will need to be done to adjust the parent class.
// 3. Create 2 different sub-classes for cats and 2 different sub-classes for snakes. Make sure that they are different but still have all of the same attributes that their parent and ancestor classes have.
// 4. Generate several variables that are instances of each class to test that your classes are working as intended.

class Animal {
    constructor(isWarmBlooded, numLegs, name){
        this.isWarmBlooded = isWarmBlooded;
        this.numLegs = numLegs;
        this.name = name;
    }
    vocalize(sound){
        console.log(`The ${this.name} says ${sound}!`);

    }
}

let dog = new Animal(true, 4, "Dog");
    console.log(dog);
    dog.vocalize("Woof");

    // Build a new subclass for cat
    class Cat extends Animal{
        constructor(furLength, isDomesticated){
            super(true, 4, "Cat");
            this.furLength = furLength;
            this.isDomesticated = isDomesticated;
        }
    }
    let myCat = new Cat("short", true);
    console.log(myCat);
    myCat.vocalize("Meow")

    class Hamster extends Animal{
        constructor(furLength, isDomesticated){
        super(true, 4, "Hamster");
        this.furLength = furLength;
        this.isDomesticated = isDomesticated;
        }
        vocalize() {
            super.vocalize("Squeek");
        }
    }

    let myHamster = new Hamster("short", true);
    console.log(myHamster);
    myHamster.vocalize();

    class russianHamster extends Hamster{
        constructor(){
            super("long", false)
        }

        }
    
