function mat(){
    let food = ['food1', 'food2', 'food3','food4', 'food5', 'food6', 'food7'];
    let nmbr = Math.floor((Math.random() * 7));
    let date = new Date();
    if(date.getDay() === 5){
        return "Det är fredag du skall äta ute!"
    }else{
        return 'Idag skall du äta ' + food[nmbr];
    }
    
}document.write(mat());