// 7-occurrences.js

exports.nbOccurences = function (list, searchElement) {
  // this function returns the
  // number of occurrences in a list

  const searchList = []; // create a new list to contain search element

  /* loop through elements in the list */
  for (let i = 0; i < list.length; i++) {
    /* if the element to search in the list */
    if (list[i] === searchElement) {
      searchList.push(searchElement); // push the search element to the list
    }
  }

  const count = searchList.length; // count the number of search elements

  return (count); // return the length of the list containing the search element
};
