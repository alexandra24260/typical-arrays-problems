exports.min = function min (array) {
  if (array && array.length){
    $min = Math.min.apply(null, array);
    return $min;
  }
  else {
    return 0;
  }
}

exports.max = function max (array) {
if (array && array.length){
  $max = Math.max.apply(null, array);
  return $max;
}
else {
  return 0;
}  
}

exports.avg = function avg (array) {
if (array && array.length){
  let result = 0;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
  let average = result/array.length;
  return average;
}
else {
  return 0;
}
}

