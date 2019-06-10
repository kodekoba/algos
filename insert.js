//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

//We will use an array to store our key-value pairs. We first need to set the capacity of this array, which we may do by defining its length.

var hashMap = [];
hashMap.length = 30;  // set the capacity by defining the length of the array

//Given a key, a value, and the array we are using for our hash map, the function should hash the key and mod it based on the array's length. Add a 2-element array containing  the key and the value to the nested array at the index determined by modding the hash.
//We may use prototype to give all strings the ability to generate their hash code with the following code:

String.prototype.hashCode = function(){
    var hash = 0;
    if(this.length == 0){
        return hash;
    }
    for(i=0; i<this.length; i++){
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;  // bitwise operators are used to manipulate the string in binary
        hash &= hash;                
    }
    return hash;                         // by the end of the loop, the hash is unique to this string
}
// Now, when we need a particular string's hash code, we may call its hashCode method, which we just created
var hashedKey = "role".hashCode();