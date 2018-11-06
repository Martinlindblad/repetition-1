for(let i = 1; i <= 100 ; i++){
    let sum = ''
    if(i%3==0){sum += 'fizz'};
    if(i%5==0){sum += 'buzz'};
    if(sum == ''){sum += i};
    console.log(sum)
}