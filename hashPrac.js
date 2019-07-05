let user = {
    age: 54,
    name: "Akiko",
    magic: true,
    scream: function(){
        console.log("ahhhhh!")
        return this;
    }
}

user.age; //O(1)
user.spell = "fireball"; //O(1)

user.scream().scream(); //O(1) // chaining by 'return this'

//collisions can cause your hash table to slow down
//collisions slows down reading and writing ability =>
//O(n/k) where k is the size of your hash table => removing constants becomes O(n)
//AKA absolute WORST CASE - hash tables might be O(n) lookup/search, although unlikely, avg is still O(1)
// ------- //

const a = new Map(); //difference btw a map and an abject is that you can save any data type as the key!!
const b = new Set(); //like a map but ONLY stores keys, NO values