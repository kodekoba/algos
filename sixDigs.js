function sixDigs(n) {
    if (n < 2) {
        return n;
    }
    let res = BigInt(1);
    for (let i = 2; i <= n; i++) {
        res *= BigInt(i);
    }
    console.log("factorial res: " + res)
    while (res % BigInt(10) === 0n) {
        res /= BigInt(10);
    }
    console.log("postmod: " + res)
    res = res.toString();
    if (res.length > 6){
        console.log(res.length)
        res = res.substr(res.length - 6)

        return parseInt(res)
    }
    return parseInt(res)
}

console.log(sixDigs(20))
