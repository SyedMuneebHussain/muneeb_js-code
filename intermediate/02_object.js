//const tinderuser=new Object();//singleton object
const tinderuser={};//non singleton object
 tinderuser.Id="123sd";
 tinderuser.name="sohail"
 tinderuser.isloggedin=false;
 console.log(tinderuser);
 console.log(Object.keys(tinderuser));
 console.log(Object.values(tinderuser));
 console.log(tinderuser.hasOwnProperty("isloggedin"));//to check that object has a key or value
 
 
//  const regularuser={
//     email:"sasads@gmail.com",
//     fullname:{
//         username:{
//             firstname:"muneeb",
//             lastname:"shah"
//         }
//     }
//  }
//  console.log(regularuser.fullname.username.last);
// const obj1={"1":"a","2":"b"};
// const obj2={"3":"c","4":"d"};
// const obj3={"5":"e","6":"f"}
// //const obj4=Object.assign({},obj1,obj2,obj3);//first argument is target after that all are source
// const obj4={...obj1,...obj2,...obj3};
// console.log(obj4);

 