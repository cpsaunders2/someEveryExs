


function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 !== 0;
    });
};


function hasAZero(num){
    let newArr = num.toString().split('');   
    return newArr.some(function(val){
        return val === '0';
    });
};


function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    });
};


function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
};


function hasCertainKey(arr, key){
    return arr.every(function(val){
        return val[key];
    });
};


function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value;
    });
};