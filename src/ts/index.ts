/**
 * class 
 * daiyunzhou 2019/1/4 14:29
 */

class Test {
    all: number;
    private mycolor: string;
    constructor (public num: number,price: number){
        this.all = num * price;
        this.mycolor = "pink";
    };
    shoutout (){
        console.log(this.all);
        console.log(this.mycolor);
    }
}
var count = new Test(3,4.3);
count.shoutout();
console.log(count.all);