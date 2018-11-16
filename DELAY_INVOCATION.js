var DelayInvocation = function (arg1) {
    return function (arg2) {
        return temp(arg1, arg2);
    }
}
var temp = function (arg1, arg2) {
    return arg1 + arg2;
}
module.exports = DelayInvocation;

// var t = DelayInvocation(3);
// var r = t(4);
// console.log(r);