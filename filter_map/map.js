let mynums=[1,2,3,4,5,6,7,8,9];
let newnums=mynums.map((num)=>(num+10))
console.log(newnums);
// let newnums=[] 
// mynums.forEach((num)=>{ //with for each method
//     num= num+10;
//     newnums.push(num)
//     return num
//  })
//  console.log(newnums);
 
//// chaining rule
let newnum=mynums.map((num)=>(num*10)).map((nums)=>(nums+1)).filter((num)=>(num>=40))
console.log(newnum);

