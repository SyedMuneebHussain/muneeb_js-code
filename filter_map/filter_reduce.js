let mynums=[1,2,3,4,5,6,7,8,9,10];
const nums=mynums.filter((num)=>(num>4));
//console.log(nums);

// const newnum=mynums.filter((nums=>{ //with filter method
//     return  nums>3
// }))
// console.log(newnum);
//  let newnums=[] // with for each method
//  mynums.forEach((num=>{
//     if (num>4) {
//         newnums.push(num)
//     }
//  }))
//  console.log(newnums);
  const books=[
    {title:"Bookone",genre:"fiction",published:"1981",edition:"1989"},
    {title:"booktwo",genre:"history",published:"1975",edition:"1979"},
    {titlr:"bookthree",genre:"non fistion",published:"2001",edition:"2004"},
    {title:"bookfour",genre:"science",published:"1965",edition:"1970"},
    {titlr:"bookfive",genre:"history",published:"1987",edition:"1992"},
    {titlr:"booktsix",genre:"history",published:"2007",edition:"2010"}
  ];
  //const newbook=books.filter((bk)=>(bk.genre==="history"))
  const newbook=books.filter((bk)=>(bk.published>"2000" && bk.genre==="history"))

  console.log(newbook);
  