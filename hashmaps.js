// example
var dino = { 
    type: "dinosaur",
    species: "Snorkasaurus", 
    role: "pet", 
    owner: "Fred Flintstone",
    creator: "Hanna-Barbera"
};
console.log(dino.owner);

//The amazing thing about key-value pairs (in JavaScript we refer to these as objects, in Python as dictionaries... here are many names! Including hash maps and associative arrays) is that the look up time is very quick! We create a key with any name we like and associate a value with that key.

//Key-value pairs work by hashing the key into a hash code. That means we turn the string that we are using as a key into a number. The hashing algorithm is very reliable and will always produce the same number for a given key, but it will be unique to that string. No other string could produce the same number. What this means is that we can use this number as an index position in an array! We no longer need to loop through the array. We simply hash the key to find out which index to go to!

//To solve the issue of the hashing algorithm giving insanely big numbers, we'll decide how big we will allow our array to get. Call this the capacity. We will then use our hash and mod it, or translate it into a number that fits within the capacity. We will then store our value at this index in the array. However, this introduces the problem of collisions. While the hashing algorithm guarantees that our hashes will be unique for each key, once we start modding them, we are no longer guaranteed unique numbers.

//Even though collisions may occur, it is overall still faster. We'll store the keys and the values as their own 2-element arrays within the array. Though some time will be required to search this inner array, these nested arrays should be kept fairly small. Most of the work will be done by narrowing down our search to a particular nested array thanks to the hashing algorithm.

var dino = [
    [["role", "pet"], ["creator", "Hanna-Barbera"]],
    [["type", "dinosaur"]],
    [["owner", "Fred Flintstone"], ["species", "Snorkasaurus"]]
   ];
// hash the key "role", which will give a unique number
// mod the hash by the capacity we set for our array, which will give us a number within the capacity
// in this case, modding the hash gives us the number 0
// at position 0, we have a nested array
// loop through the array at position 0 to find the array with the  key "role" at index 0
// the value is in that array at position 1

//**********************************************************************************************
