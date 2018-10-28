module.exports = function sumOfOther(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++)
        result.push(arr.reduce((acc, elem) => acc + elem) - arr[i]);
    return result;
}