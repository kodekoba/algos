//  wrong
let repeatedNTimes = function(arr) {
    let dict = {};
    for(let i=1; i<arr.length+1; i++){
        console.log('key' + i);
        if(typeof(dict.arr[i]) !== undefined){
        //if(!('key' + i) in dict){
            console.log(1);
            dict['key' + i] = 1;
        } else {
            console.log(2);
        }
    }
    return dict;
};

console.log(repeatedNTimes([1,2,3,3]));