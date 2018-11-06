function sheep(){
    let antal = 1;
    for(i = 0; i < 12 ; i++){
        antal *= 4 ;
    }

    return antal;
}
console.log(sheep());