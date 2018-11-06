let time = new Date()
function tid(){
    return time.toTimeString().slice(0,8)
}
console.log(tid());