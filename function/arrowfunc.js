const user={
    username:"muneeb",
    price:799,
    welcomemessage:function(){
         console.log(`${this.username} welcome to website`) ;
         console.log(this);
         
    }
}
//user.welcomemessage();
//user.username="sohail";
//user.welcomemessage();

const addTwo=(num1,num2)=>{ //explicit return
    return num1+num2;
}
console.log(addTwo(4,8));
const addtwo=(num1,num2)=> (num1+num2);//thus is called implicit return 
console.log(addtwo(2,9));