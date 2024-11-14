const marvel_heros=["iron man","thor","spiderman"];
const dc_heros=["superman","flash","batman"];
// marvel_heros.push(dc_heros);//it add array in another array.it push in existing array
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);
// const mar_dc_heros=marvel_heros.concat(dc_heros);//concat join both array it give us new array
// console.log(mar_dc_heros);
// const india_heros=["nagraaj","karma",]
// const all_heros=[...marvel_heros,...dc_heros,...india_heros];//spread method do same as concat but we can add more array in spread 
// console.log(all_heros);
const anotherarr=[1,4,5,32,6,[6,8,4,],[87,9,12,[54,6,90]]];
const realanotherarr=anotherarr.flat(Infinity);//it will convert it in one array and give it num that how much it goes in depth 
console.log(realanotherarr);
console.log(Array.isArray("muneeb"));//in statement we ask that it is array ?
console.log(Array.from("muneeb"));//it convert it in array from string
console.log(Array.from({name:"muneeb"}));// interesting for interview it will return empty array
let score1=200;
let score2=100;
let score3=700;
console.log(Array.of(score1,score2,score3));//it conver elements in new array 


