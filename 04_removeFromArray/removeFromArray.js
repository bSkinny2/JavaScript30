const removeFromArray = function(array, par1, par2) {
    let index = array.indexOf(par1);
    ;
    array.splice(index, 1);

    if (par2 !== undefined) {
        let index2 = array.indexOf(par2);
        array.splice(index2, 1);
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
