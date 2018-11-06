/*function hello(){
    console.log("Hello World");
}
hello();
hello();
hello();
hello();
hello();


function two(a, b){         
    return a * b;
}
console.log(two(1, 2));

function three(a, b, c){
    return a * b / c;
}
console.log(three(2, 2, 2));

function medel1(a,b,c){
    return (a+b+c) / medel1.length;
}
console.log(medel1(2, 2, 3));

function one(a, b){
    return a * b;
}

function two(x, y, z){
    return one(x, y) + z;
}
let result = two(2, 3, 4);
console.log(result);

console.log("_____________");

function ValueFunction(value){
    this.value = value;
    this.getValue = function (){
        return this.value;
    }
    this.setValue = function(a) {
        this.value += a;
    }
}
let valueTest = new ValueFunction(10);
valueTest.setValue(20);
console.log(valueTest.getValue());

 
function func(name){
    name = prompt("Ange ditt namn: ");
    return "Hello " + name +'!';
}
document.write(func());


function func(){
    tim = prompt("Input a number over 59: ");
    if (tim < 60){
        return "Less than 60"
    } else if(tim >= 60){
        return tim + " Min" + "\n" + (tim / 60).toFixed(1) + " Timmar";
    }
}
alert(func())


function tid(){
    let min = prompt("Ange antal minuter: ");
    let kr = prompt("Ange konstnaden per minut: ");
    return (min * kr) + " Kr/månad";
}
alert(tid())


function func(pris, moms){
    let hej = moms * 0.01;
    this.inkl = pris * hej;
    
    return "Priset utan moms: " + pris + "\n" +  "Priset med moms: " + (pris + inkl);
}
alert(func(100, 25));

*/
