function gcd_xy(x,y){
    if (y == 0){
        return x;
    } else if (y >= x && y > 0) {
        return gcd_xy(x, y % x);
    } else {
        return gcd_xy(y, x);
    }
}

function gcd(arr){
    if (arr.length == 1) {
        return arr[0];
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]){
            console.log("sorting: " + arr);
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            console.log("sorted: " + arr);
            return gcd(arr);
        } else if (arr[arr.length - 1] == 0) {
            console.log("the end:" + arr)
            return arr[arr.length - 2];
        } 
        // else if (arr[i] == 0) {
        //     console.log("moving on");
        // } 
        else if (arr[i] > 0 && arr[i+1] >= arr[i]){
            console.log("mod and replace:" + arr);
            arr[i+1] = arr[i+1] % arr[i];
            console.log("updated arr:" + arr);
            return gcd(arr);
        } else {
            console.log("k")
        }
    }
}

console.log(gcd_xy(210,45));
console.log(gcd([14,35,21]));