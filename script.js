function indexOfIgnoreCase(s1, s2) {
  // write your code here
  if (typeof str !== 'string' || typeof subStr !== 'string') return -1;
  return str.toLowerCase().indexOf(subStr.toLowerCase());
}
 
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
