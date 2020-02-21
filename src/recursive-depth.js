module.exports = class DepthCalculator {
    calculateDepth(arr, depth=0) {
        ++depth
        for(let elem of arr){
            if(Array.isArray(elem)){
                return this.calculateDepth(arr.flat(), depth)
            }
        }
        return depth
    }
};