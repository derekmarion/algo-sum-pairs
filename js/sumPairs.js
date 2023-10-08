sumPairs = function(arr, num) {
    let output = [];
    let toSkip = [];
    for (element of arr) {
        let currentNum = element;
        toSkip.push(currentNum);
        for (subElement of arr) {
            if ((currentNum + subElement == num) && (!(toSkip.includes(subElement)))) {
                output.push([currentNum, subElement]);
            };
        };
    };
    if (output.length != 0) {
    return output;
    };
    return "unable to find pairs"
};

module.exports = {sumPairs};