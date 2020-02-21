module.exports = function repeater(str, options) {
    if(!options.separator){
        options.separator = '+'
    }
    if(!options.additionSeparator){
        options.additionSeparator = '|'
    }
    let addition = '' 
    for(let i=0; i< options.additionRepeatTimes; i++){

        addition += options.addition 
        if(i !== options.additionRepeatTimes -1){
            addition +=options.additionSeparator
        }
    }
    let result =''
    for(let i=0; i<options.repeatTimes; i++){
        result += str + addition;
        if(i !== options.repeatTimes - 1){
            result += options.separator
        }
    }

    if(!options.repeatTimes && !options.additionRepeatTimes){
        result = str + options.addition
    }

    return result
};
  