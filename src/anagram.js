/**
 * Check if two strings are anagram
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
const isAnagram = function(str1, str2) {
  // console.log(str1.split('').sort());
  // console.log(str2.split('').sort());
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

export default isAnagram;