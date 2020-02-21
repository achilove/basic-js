module.exports = function countCats( matrix ) {
  let number = 0;
  matrix.flat().forEach(el => {
    if(el === "^^"){
      ++number 
    }
  })

  return number;
};
