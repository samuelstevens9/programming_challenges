var necklaces = [
  5,4,0,3,1,6,2
]
necklaces = [
  1,2,3,4,5,6,7,1
]
solution(necklaces);

function solution(A){
  /* 
    follow the paths: [ 5,4,0,3,1,6,2 ]
    index 0 -> index 5 -> index 6 -> index 2 -> index 0, full circle DONE
  */
  var found_necklaces = []; // array of arrays
  // var start_index = 0; //start at 0
  var max_necklace_length = 0;
  for(var i = 0; i < A.length; i++){
    var f_necklace = followNecklace(A, i);
    var alreadyFound = false;
    for(var n = 0; n < found_necklaces.length; n++){
      if (arraysEqual(f_necklace, found_necklaces[n])){
        alreadyFound = true;
        break;
      }
    }
    if (!alreadyFound){
      if (f_necklace.length > max_necklace_length){
        max_necklace_length = f_necklace.length;
      }
      found_necklaces.push(f_necklace);
    }
  }
  console.log("Necklace", found_necklaces, "Max Length", max_necklace_length);
  return max_necklace_length;
  
}

function followNecklace(A, start_index){
  
  var current_index = start_index;
  var max_loops = A.length;
  var necklace = [];
  do {
    var next_index = A[current_index];
    necklace.push(next_index);
    current_index = next_index;
    max_loops--;
  } while (start_index != current_index && max_loops > 0)
  console.log("Full circle? start_index == current_index ", start_index == current_index );
  if (start_index == current_index){
    // full circle, so we have a complete necklace
    return necklace.sort();  
  }
  return [];

}
function arraysEqual(a1, a2) {
  /* WARNING: arrays must not contain {objects} or behavior may be undefined */
  return JSON.stringify(a1) == JSON.stringify(a2);
}