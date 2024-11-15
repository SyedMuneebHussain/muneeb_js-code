(function chai(name){
    console.log(`${name} db is connected`);
    
})("muneeb"); // this is called IIFE we use to avoid global scope valraible pollution
((name)=>{
    console.log(`${name} db is not connected`);
    
})("muneeb");//IIFE but we use arrow function