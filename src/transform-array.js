module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error('arguement is not array')
    }

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                if (arr[i + 1] !== undefined) {
                    newArr.push(arr[i + 1]);
                }
                break;
            case '--discard-next':
                i = i + 1;
                break;
            case '--discard-prev':
                newArr.pop();
                break;
            case '--double-prev':
                if (arr[i - 1] !== undefined) {
                    newArr.push(arr[i - 1]);
                }
                break;
            default:
                newArr.push(arr[i]);
                break;

        }

    }
    return newArr;
};
