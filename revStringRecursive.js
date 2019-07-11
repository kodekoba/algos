// const printReverse = function (str, i) {
//     // let i = str.length - 1;
//     //let i = 0;
//     if (!str[i]) {
//         return;
//     }
//     //++i;
//     printReverse(str, i + 1);
//     console.log(str[i]);
//     return;
// }

// printReverse("wowza", 0)

// *********** //

let i = 0;
let check = false;
const printReverse2 = function (str) {
    if (!str[i]) {
        console.log("not str i");
        check = true;
        return;
    }
    ++i;
    printReverse2(str);
    if (check) {
        console.log(str[--i]);
        return;
    }
    return;
}

printReverse2("holy guac")