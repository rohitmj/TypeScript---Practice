class Animal{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal{
    speak(): void{
        console.log(`${this.name} barks`);
    }
}

const myDog: Dog = new Dog("Rex");
myDog.speak();