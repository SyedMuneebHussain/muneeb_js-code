const useremail=[];
if (useremail){
    console.log("got user email");
    
}
else{
    console.log("dont have user email");
    
}

// falsy value

// false,0,-0,NaN,"",bigInt 0n,Null,undefined

//truthy value

//"0","false","  ",[],{},function(){},

//how to check array and object are empty are not
if(useremail.length===0){
    console.log("array is empty");
    
}else {
    console.log("not empty");
    
}

const obj={}
if(Object.keys(obj).length===0){
    console.log("object is empty");
    
}
 //nullish coelescing operator (??):Null undefined
 let val1;
 //val1=5 ?? 10;
 //val1=null ?? 10;
 //val1=undefined ?? 15;
 val1=null??10??15;

 console.log(val1);
 

 //Terniary Operator
 const iceTeaPrice=100;
 iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80");
 
 
