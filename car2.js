function Car(regNmr, fabrikat, v, productionYear, fuel){
    this.regNmr = regNmr;
    this.fabrikat = fabrikat;
    this.v = v;
    this.productionYear = productionYear;
    this.fuel = fuel;
}
let fiat = new Car('abc123', 2018, 'en växel', 2018, 'morötter');
let kia = new Car('abd124', 2018, 'en växel', 2018, 'BENSIN');
console.log(kia);
console.log(fiat);