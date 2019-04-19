// function findMinAndRemove(array){
//     let min = array[0]
//     let minIndex = 0
//     for (i=0; i< array.length; i++){
//         if (array[i]< min){
//             min = array[i]
//             minIndex = i
//         }
//     }
//     array.splice(minIndex,1)
//     return min
// }
//
// function insertionSort(array){
//   sortedArray = []
//   while(array >= sortedArray){
//       sortedArray.push(findMinAndRemove(array))
//   }
//   return sortedArray
// }

function findMinAndRemove(array){
  let currentMin = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] < currentMin){
      currentMin = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1);
  return currentMin;
}

function insertionSort(array){
  let sorted = []
  let min;
  while(array.length != 0){
    min = findMinAndRemove(array)
    sorted.push(min)
  }
  return sorted;
}
