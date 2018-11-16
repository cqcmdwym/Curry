var total = 0;
var sum = function(arg) {
    if(arg){
        total +=arg;
        return sum;
    }
    else{
        var result = total;
        total = null;
        return result;
    }
}

module.exports = sum;
// var a = sum(1);
// var b = a(2);
// var t = b();
// console.log(t);