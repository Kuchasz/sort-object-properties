# sort-object-properties
Simple utility that returns copy of object with sorted properties by its key names

## Installation
For your project's use:
`npm install sort-object-properties --save`

## Usage
```var sort = require('sort-object-properties');

var objectToSort = {a:'awdawd', z:'awawd', c:'awdawd'};
var sortedObject = sort(objectToSort);

console.log(objectToSort); //prints: { a: 'awdawd', z: 'awawd', c: 'awdawd' }
console.log(sortedObject); //prints: { a: 'awdawd', c: 'awdawd', z: 'awawd' }```
