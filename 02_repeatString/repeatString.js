const repeatString = function(text, number) {
    let outputText = text;
    if (number < 0) {
        outputText = "ERROR"
    } else if (number == 0 || text == "") {
        outputText = ""
    } else {
    for (i = 0; i < number - 1; i++) {
        outputText = outputText + text;
        }
    }
    return outputText;
    }

// Do not edit below this line
module.exports = repeatString;
