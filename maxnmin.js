function maxMin(arr){
    return Math.max(...arr) + '\n' + Math.min(...arr);
}
console.log(maxMin([10, 4, 5]));