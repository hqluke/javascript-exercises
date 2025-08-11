const sumAll = function(...nums) {
    
    
    a = nums[0];
    b = nums[nums.length-1];
    arr = [];
    total = 0;
    if(a < 0 || b < 0 || Number.isInteger(a) == false || Number.isInteger(b) == false){
        return "ERROR";
    }
    if( a > b){
        for (b; b < a + 1; b++){
        arr.push(b);
        }
    }
    else {
        for (a; a < b + 1; a++){
            arr.push(a);
        }
    }
    
    for(num of arr){
        total += num;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
