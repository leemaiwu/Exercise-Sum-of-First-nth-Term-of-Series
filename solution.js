const SeriesSum = (n) => {
    let divider = 4
    let final = 1
    if (n === 0) {
        return n.toFixed(2)
    } else {
        for (let i = n; n > 1; i--) {
            if (n > 1) {
                final += 1 / divider
                n--
                divider += 3
            }
        }
        return final.toFixed(2)
    }
}

console.log(SeriesSum(0)) // '0.00'
console.log(SeriesSum(1)) // '1.00'
console.log(SeriesSum(2)) // '1.25'
console.log(SeriesSum(5)) // '1.57'
