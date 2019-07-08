const repeatCharacters = function(str) { // only works for the first instance of a repeated letter
    let map = {};
    for (let i in str) {
        if (str[i] in map) {
            return str[i];
        } else {
            map[str[i]] = 1;
        }
        //console.log(map)
    }
    return null;
}
console.log(repeatCharacters("abca")); // a

const repeatCharacters2 = function(str) { // returns an object of how many times the duplicates appeared
    let map = {};
    let res = {};
    for (let i in str) {
        if (str[i] in map) {
            if (str[i] in res) {
                res[str[i]] +=1;
            } else {
                res[str[i]] = 2;
            }
        } else {
            map[str[i]] = 1;
        }
    }
    return res;
}
console.log(repeatCharacters2("abcbada")); // {b: 2, a: 3}