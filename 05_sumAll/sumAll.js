const sumAll = function(a, b) {
    let minimum = Math.min(...arguments);
    let maximum = Math.max(...arguments);
    var output;
    if (minimum < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        output = "ERROR";
    } else {
         output = 0;
    for (i = minimum; i <= maximum; i++) {
        output += i;
    }
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
