let arr=[2,4,5,3,,8];
function largestnum(value){
    value.sort();
    let highest=0;
    let slargest=0;
    let slowest=arr[1]
    let lowest=arr[0];
    for (let i = 0; i < value.length; i++) {
        if (value[i]>highest){
            slargest=highest;
            highest=value[i];
            sum=highest+slargest
        }
        else if(value[i]<lowest){
            
            lowest=value[i];
            slowest=lowest;
        }
        
    } 
     
    return {highest,slargest,sum,lowest,slowest}; 
}
console.log(largestnum(arr))