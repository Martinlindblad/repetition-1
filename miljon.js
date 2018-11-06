function miljon(){
    let pay = 500;
    let pays = 0;
    let proc = 1.10;
    while(pay < 1000000){
        pay += pay * proc;
        pays++
    }
    return pays
}console.log(miljon());