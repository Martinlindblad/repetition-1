function distance(x1, x2, y1, y2){
    return Math.sqrt(Math.pow((x2-x1) + (y2-y1), 2));
}
console.log(distance(1, 2, 3, 4));