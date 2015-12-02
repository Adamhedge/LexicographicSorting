/*
I defined lexicographic sorting as such.

Given a order string, there is a defined distance from an ideal order, 
per character.

For example, with an order of 'ABC', 'ACB' would have the following
character distances:
[A: 0, C: 2, B: 1]
Where the corresponding numbers are the order in which they appear 
in the order string.

To compare two strings against the order, you iterate through each 
character, identifying the first character whose order # is greater
than the opposing string.  That string is 'greater than' the other
string by definition of Javascript's array sorting algorithm.

Special cases include 
1. Empty strings, which are always first in ordering
2. Strings of differing length.  The longer string will
   be considered 'greater than' if the characters in 
   the shorter string match their corresponding characters
   in the longer string.
   
I put this logic into a comparator function and sorted the array as such.
The given test cases pass.

*/
var lexicographicSort = function(array, order){
  //A string comparator
  var compareTwoStrings = function(a,b){
    //Strings are equal, return 0
    if (a === b){
      return 0;
    //one String is empty, the other isn't
    } else if (a.length === 0 && b.length !==0){
      return -1;
    } else if (a.length !== 0 && b.length === 0){
      return 1;
    } else {
      //Iterate through both strings, comparing each character's order distance
      for(var i = 0; i < a.length || i < b.length; i ++){
        if(order.indexOf(a[i]) < order.indexOf(b[i])){
          return -1;
        } else if (order.indexOf(a[i]) > order.indexOf(b[i])){
          return 1;
        }
      }
      //If all characters were equal, then the strings are not of equal length.
      //The longer string is 'greater than'
      if(a.length === i){
        return 1;
      } else {
        return -1;
      }
    }
  };
  return array.sort(compareTwoStrings);
};

console.log(lexicographicSort( ["acb", "abc", "bca"], "abc"));
//["abc","acb","bca"]

console.log(lexicographicSort( ["acb", "abc", "bca"], "cba"));
//Example output #2: ["bca", "acb", "abc"]

console.log(lexicographicSort(["aaa","aa",""], "a"));
//Example output #3: ["", "aa", "aaa"]

console.log(lexicographicSort(["apple","zorro", "yelp", "burger", "zoo"], "zyxwvutsrqponmlkjihgfedcba"));

console.log(lexicographicSort(["apple","zorro", "yelp", "burger", "zoo"], "abcdefghijklmnopqrstuvwxyz"));
