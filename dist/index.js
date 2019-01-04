/**
 * class
 * daiyunzhou 2019/1/4 14:29
 */
var Test = /** @class */ (function () {
    function Test(num, price) {
        this.num = num;
        this.all = num * price;
        this.mycolor = "pink";
    }
    ;
    Test.prototype.shoutout = function () {
        console.log(this.all);
        console.log(this.mycolor);
    };
    return Test;
}());
var count = new Test(3, 4.3);
count.shoutout();
console.log(count.all);
