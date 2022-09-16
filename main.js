// CodeWars_Solution

//Link to task
//https://www.codewars.com/kata/57a60bad72292d3e93000a5a/train/javascript

function toAcronym(inp){
  return inp.split(' ') // str to array 'Code wars' to ['Code', 'wars']
  .map(el =>el[0].toUpperCase()) /* first letter of every element ['C', 'w'] 
  and use methor 'toUpperCase' to make it ['C', 'W']  */
  .join('') // concatenation els of array without any connection symbols
}
