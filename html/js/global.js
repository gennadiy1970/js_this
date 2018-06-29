// console.log(this === window);
console.log('this === window // ' + (this === window));


'use strict';
console.log('"use strict" this === window //' + (this === window));


var vName = 'vName';
function fName () {  return 'fName' }

console.log(window.vName);
console.log(window.fName());
console.log(this.vName);
console.log(this.fName());

// let lName = 'lName';
// const cName = 'cName';
var oName = {
    name: 'oName'
}
// console.log(this.lName);
// console.log(this.cName);
console.log(this.oName.name);