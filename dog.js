function Dog(breed, size, age, color){
    this.breed = breed;
    this.size = size;
    this.age = age;
    this.color = color;
    this.eat = () => 'Eating';
    this.sleep = () => 'Sleeping';
    this.sit = () => 'Sitting';
    this.run = () => 'Running';
}
let dog1 = new Dog('Neopolitan Mastiff', 'Large', '5 years', 'black');
let dog2 = new Dog('Maltese', 'small', '2 years', 'white');
let dog3 = new Dog('Chow Chow', 'Medium', '3 years', 'Brown');
console.log(dog1.age + '\n' + dog2.age + '\n' + dog3.age + dog3.eat());
