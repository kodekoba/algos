// wrong
function rangeSumBST(root, L, R) {
    let sum = 0;
    for(let i=0; i<root.length; i++){
        if(root[i]>=L && root[i]<=R){
            sum += root[i]; 
        }
    }
    return sum;
};

console.log(rangeSumBST([10,5,15,3,7,null,18],7,15));