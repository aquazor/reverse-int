module.exports = function reverse(n) {
    let reversed = "";
    let strN = Math.abs(n).toString();

    for (let i = 0; i < strN.length; i++) {
        if (strN[strN.length - 1] === "0") {
            strN = strN.slice(0, -1);
        }
        reversed = strN[i] + reversed;
        // reversed = '1' + '' , = '2' + '1' , = '3' + '21'
    }
    // console.log(reversed);
    return reversed;
};
