let date = new Date()
function time(){
    days = ['sunday', 'monday', 'thuseday', 'wendsday', 'thursday', 'friday', 'saturday']
    month = ['January', ' February', 'Mars', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']    
    return days[date.getDay()] + ' den ' + date.toDateString().slice(8,10) + ' ' + month[date.getMonth()-1] 
}
console.log(time());