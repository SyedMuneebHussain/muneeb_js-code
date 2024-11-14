//singleton
//when object created from constructor its called singleton object.ye apny tarah k 1 hi object ha
//object.create //this singleton object
//object literal
const mysym=Symbol("mykey1");//use it in object as symbol
let user={
    Name:"Muneeb",
    "full name":"Syed Muneeb Shah",
    [mysym]:"mykey1",
    email:"muneebshah@gmail.com",
    isloggedin:false,
    lastloggedin:["moday","tuesday"]
}
// console.log(user["Name"]);
// console.log(user.Name);//this is second method to show
// //console.log(user.fullname);//now we can not call beacsue it has double coat in object so best way to call is user["fullname"]
// console.log(user["full name"]);
// console.log(user[mysym]);
// console.log(typeof[mysym]);
// user.email="muneebhussain@gmail.com";//with this i can change value of objects
// console.log(user["email"]);
// Object.freeze(user);//now we freeze the object and we canot change anything in object
// user.email="pirmuneebshah@gmail.com";//now value of email didnot change because of freeze method
// console.log(user);
user.greeting=function x(){
    console.log("hello js user");
    
}
user.greeting2=function (){
    console.log(`hello js user ${this.Name}`);
    
}
console.log(user.greeting());
console.log(user.greeting2());
//console.log(user);



