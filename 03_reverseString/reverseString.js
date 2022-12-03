const reverseString = function(input) {
    const length = input.length;
    let output = "";
    for (i = length; i > -1; i --) {
        output += input.charAt(i);
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
