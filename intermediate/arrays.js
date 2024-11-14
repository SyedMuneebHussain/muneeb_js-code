let myarr=[2,5,6,"muneeb",true];
console.log(myarr);
let arr=new Array(1,3,4,"sohail",false);
console.log(arr);
// console.log(myarr[3]);
// console.log(arr[4]);

// //array method
// myarr.push(8);
// console.log(myarr);
// myarr.pop();//it will remove last value
// console.log(myarr);
// myarr.unshift(10);//its add value at start
// console.log(myarr);
// myarr.shift();//it will remove first value
// console.log(myarr);
// console.log(myarr.includes(9));//it will tell us that 9 is present in array or not it will give ans in true and false
// console.log(myarr.indexOf("muneeb"));//it will return index if value is present in array otherwise it will return -1
// console.log(myarr.indexOf("mu")
// const newarr=myarr.join();//it will change array type into string and return same value
// console.log(myarr);
// console.log(newarr);
// console.log(typeof(newarr));
console.log("A",myarr);
const myn1=myarr.slice(1,3);//first range will included and second range will be excluded
console.log(myn1);

console.log("B",myarr);
const myn2=myarr.splice(1,3);//it will include both ranges and remove the value from original array
console.log(myn2);
console.log(myarr);




