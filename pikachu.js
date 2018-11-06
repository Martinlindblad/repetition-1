/*let Pika = new function() {
    this.name ="Pikachu";
    this.type = "Electric";
    this.health = "70";
    this.attack = function(){
        return "Attack";
    }
    this.dodge = function(){
        return "Dodge";
    }
    this.evolve = function(){
        return "Evolving";
    }
}
console.log(Pika.name + ' is ' + Pika.evolve());
*/

let Pika = {
    name: 'Pickachu',
    type: 'Electric',
    health: 70,
    attack: () => 'Attack',
    dodge: ()=> 'Dodge',
    evolve: ()=>'Evolving'

}