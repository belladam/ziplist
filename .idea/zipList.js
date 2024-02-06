/*
 * zipList E27
 * @author Adam Bell
 * @since 2/5/2024
 */

//const _ = require('underscore');

const myList1 = ['a', 'b', 'c'];
const myList2 = [1, 2, 3];

function zipList(list1, list2) {
  let zipList = [];
  for(let i = 0; i < list1.length; i++) {
    zipList.push(list1[i]);
    zipList.push(list2[i]);
  }
  return zipList;
}

console.log(zipList(myList1, myList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(myList1, myList2));
