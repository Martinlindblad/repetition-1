function sum(arrd2){
    let tal =arrd2[0]
    let tal2 = arrd2[1]
    let tot = 0;
    for(i = 0; i < tal.length; i++){
        tot += tal[i]
        
    }
    for(i = 0; i < tal2.length; i++){
    tot += tal2[i]
    }
    return tot
}console.log(sum([[1,2,3], [4,5,6]]));