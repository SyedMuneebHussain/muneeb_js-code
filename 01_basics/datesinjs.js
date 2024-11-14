// const mydate=new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toLocaleString());

const mycreatedate=new Date(1999,7,7);
console.log(mycreatedate.toDateString());
let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(mycreatedate.getTime());
console.log(Math.floor(mytimestamp/1000));
console.log(Math.floor(Date.now()/1000));

let newdate=new Date();
console.log(newdate.getDate());
console.log(newdate.getMonth());
console.log(newdate.getTime());
let dates=newdate.toLocaleString('default',{
    weekday:'short'
})
console.log(dates);









