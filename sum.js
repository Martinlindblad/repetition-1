function sum(arr){
    let tot = 0;
    for(i = 0; i < arr.length; i++){
        tot += arr[i];
    }return tot
}
console.log(sum([1, 3, 4, 2]));