let arr=[1,2,3,4,5,6];
let sum=0;
let ans=[];
const targetval=7;
for (let i = 0; i < arr.length; i++) {
   
    for (let j = 0; j < arr.length; j++) {
        
        sum=arr[i]+arr[j];
        if(sum==targetval){
            // console.log(sum);
            
            ans.push([arr[i],arr[j]]);


        }
    }
    
}
console.log(ans);