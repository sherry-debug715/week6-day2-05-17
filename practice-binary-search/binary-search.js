function linearSearch (arr, target) {

  // Can you solve this in one line?
  return arr.includes(target) ? arr.indexOf(target) : -1;

};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let hi = arr.length - 1;
  let low = 0
  // While high and low indices do not overlap...
  while (low <= hi) {
    // Find the midpoint between high and low indices
    let midPoint = Math.floor((hi + low) / 2);
    // Compare the target value to the midpoint value
    // If the target equals the midpoint...
      // Return the midpoint index
    if (target === arr[midPoint]) return midPoint;
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    if (target > arr[midPoint]) low = midPoint + 1;
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
    if (target < arr[midPoint]) hi = midPoint - 1;

  }
  // Return -1 if the loop exits with overlapping pointers
  return -1;


}


module.exports = [linearSearch, binarySearch]