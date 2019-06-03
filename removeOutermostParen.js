var removeOuterParentheses = function(S) {
    let counter = 0;
    let result = '';
    
    for (let i = 0; i < S.length; i++) {
        if ((S[i] === '(' && ++counter !== 1) || (S[i] === ')' && --counter !== 0)) {
            result += S[i];
        }
    }
    
    return result;
};

console.log(removeOuterParentheses("(())()(())"));
console.log(removeOuterParentheses("(())((()))"));