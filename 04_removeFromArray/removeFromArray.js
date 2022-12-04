const removeFromArray = function(...pars) {
    const array = pars[0];
    const newArray =[]

    array.forEach((item) => {
        if (!pars.includes(item)) {
            newArray.push(item)
        }
    });
    
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
