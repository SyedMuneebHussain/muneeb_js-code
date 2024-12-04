let string="level"


function checkpalindrome(str){
    let left=0;
    let right=str.length-1;
    while (left<right) {
        if(str[left]!==str[right]){
            return false;
        }
        left++
        right--
    }
    return true;
}
console.log(checkpalindrome(string));
console.log(checkpalindrome("abc"));
