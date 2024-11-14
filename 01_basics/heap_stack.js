let name="muneeb";
let firstName=name;
    firstName="sohail";
console.log(name);
console.log(firstName);   //save in stack memory call by copy
let userOne={
    email:"muneeb@gmail.com",
    account:123244
}
let userTwo=userOne;
userTwo.email="sohail@gmail.com";
console.log(userOne);
console.log(userTwo); //heap memory call by reference


