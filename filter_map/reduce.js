let mynum=[1,2,3,4]
// let newnum=mynum.reduce(function(acc,currvalue){
//     console.log(`acc value ${acc} curre value ${currvalue}`);
    
//     return acc+currvalue
// },0)
//console.log(newnum);
//with arrow function

let newnums=mynum.reduce((acc,currvalue)=>(acc+currvalue),0)
console.log(newnums);

let shoppingcart=[
    {itemname:"js course",
     price:2999   
    },
    {itemname:"python course",
     price:999   
    },
    {itemname:"mobile dev course",
     price:5999   
    },
    {itemname:"data science course",
     price:12999   
    },
];
const pricetopay=shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(pricetopay);
