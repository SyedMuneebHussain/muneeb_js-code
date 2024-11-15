// function addTwonumber(num1,num2){
//     console.log(num1+num2);
// }
// addTwonumber(5,2);

function addTwonumber(num1,num2){
    // const result= num1+num2;
    // return result;
    return num1+num2;
}
let result=addTwonumber(4,7);
//console.log(result);
function userloginmessage(username="muneeb"){//when we pass a value in parameter then we dont need to use 
    if (!username){ //this not eqaul to username if user dont pass name in arguments then it will give message to pass a value
        console.log("please enter username");
        return
        
    }
    return (`${username} logged in successfully`)
}
//console.log(userloginmessage("saleem"));

function calculateCartPrice(...num){//rest method its useful when user pass more value in argument than parameters 
    return num;
}
//console.log(calculateCartPrice(22,400,600,122,500));


//to andle object in function
const user={
    name:"muneeb",
    price:360
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and Price is ${anyobject.price}`);
    
}                             // in this function we pass a function to access object value 
handleobject(user);

handleobject({
    name:"saleem",
    price:489
})

//handle array in function
 const myNewarr=[100,600,400,300]
 function returnarrayvalue(getarray){
    return getarray[3]
 }
 console.log(returnarrayvalue(myNewarr));
 console.log(returnarrayvalue([200,700,1000,500]));// we pass array in arguments 