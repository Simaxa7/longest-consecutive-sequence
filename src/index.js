module.exports = function longestConsecutiveLength(array) {

  if ( !array.length ) return 0;
    
  let obj = {};
  let rezultCount = 1;

  for (let i = 0; i < array.length; i++) {

    let countRight = 0;
    let rightNumber = 0;
    let countLeft = 0;
    let leftNumber = 0;

    let myCount = 1;
    let x = String(array[i]);
    let key = array[i];

    if( obj[x] == undefined) {

      rightNumber = Number(x) + 1;

      if( obj[rightNumber] >=1 ) {
        countRight = obj[rightNumber];
      }

      leftNumber  = Number(x) - 1;

      if( obj[leftNumber] >= 1 ) {
          countLeft = obj[leftNumber];
      }

      myCount +=  countRight + countLeft;

      if (countRight) {
        obj[key + countRight] = myCount;
      }

      if (countLeft) {
        obj[key - countLeft] = myCount;
        obj[leftNumber] = myCount;
      }

      obj[key] = myCount;

      if(myCount > rezultCount){
        rezultCount = myCount;
      }
    } 
  }

  return rezultCount
}
