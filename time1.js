let date = new Date();
function time (){
  
    return date.getFullYear().toString().slice(2) + (date.getMonth() + 1).toString() + date.toDateString().slice(8,10)
}
console.log(time());