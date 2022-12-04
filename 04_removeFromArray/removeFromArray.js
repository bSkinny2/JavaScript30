const removeFromArray = function(array, par1, par2, par3, par4) {
    let index = array.indexOf(par1);

    if (index !== -1) {
        array.splice(index, 1);
        }
    let index2 = array.indexOf(par2);

    if (index2 !== -1) {
        array.splice(index2, 1);
    }

    let index3 = array.indexOf(par3);
    if (index3 !== -1) {
        array.splice(index3, 1);
    }

    let index4 = array.indexOf(par4);
    if (index4 !== -1) {
        array.splice(index4, 1);
    }
    
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
