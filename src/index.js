
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix != undefined) {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 != 0) {
        matrix[i] = matrix[i].toString().split(',').reverse(); 
      } else {
        matrix.flat();
      }
    }
    return( matrix.flat(Infinity) );
  } else return [];
}
