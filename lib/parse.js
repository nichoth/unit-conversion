module.exports = function parse(stringOrNum) {
    if (typeof stringOrNum === 'String') {
        return parseInt(stringOrNum);
    }
    return stringOrNum;
};
