const repeatString = function(text, number) {
    let outputText = "";
    if (number < 0) {
        outputText = "ERROR";
    } else {
    for (i = 0; i < number; i++) {
        outputText += text;
        }
    }
    return outputText;
    }

// Do not edit below this line
module.exports = repeatString;
