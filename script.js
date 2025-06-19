var a; //declaration
a=10;
var a=20;
console.log(a);
let b;
b=30;
b=40;
console.log(b);
const c=20;
console.log(c);
var sum1=()=>{
    console.log("Hello World!");
}
sum1();
var num=5
var result= num/2==0? "Even" : "Odd";
console.log(result);
var arr=[10,20,30]; 
var arr2=[...arr,40];
console.log(arr);
console.log(arr2);
//Destructuring Operator
var marks = [90,99,100,98,97];
var [m1,m2,m3,m4,m5] = marks;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

function demo(){

}
var callback=(func)=>{
    console.log("Hello from callback");
    func();
    demo();
}
callback(demo);
var arr=[1,2,3,4,5];
var double=arr.map( num=> num*2);
console.log(double)
//filter
var odd=arr.filter(num=> num%2!=0);
console.log(odd);
var total=arr.reduce((val,num)=> val+num,0);
console.log(total);
var result=arr.map(num=>num*2).filter(num=>num>5).reduce((val,num)=>val+num,0);
console.log(result);