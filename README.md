# sort-object-properties
Simple utility that returns copy of object with sorted properties by its key names

## Installation
For your project's use:
```
npm install sort-object-properties --save
```

## API

#####Global function

| Argument        | Type | Required |            
| ------------- | :---: | ------------- | 
| obj      | `Object` | [X] |
| sortFunction      | `SortFunction` | [] |

#####SortFunction

| Argument        | Type | Required |            
| ------------- | :---: | ------------- | 
| a      | `SortObject` | [] |
| b      | `SortObject` | [] |

#####SortObject
| Property        | Type | Required |            
| ------------- | :---: | ------------- | 
| key      | `string` | [] |
| value      | `Object` | [] |


## Usage
```javascript
var sort = require('sort-object-properties');

var objectToSort = {a:'awdawd', z:'awawd', c:'awdawd'};
var sortedObject = sort(objectToSort);

console.log(objectToSort); //prints: { a: 'awdawd', z: 'awawd', c: 'awdawd' }
console.log(sortedObject); //prints: { a: 'awdawd', c: 'awdawd', z: 'awawd' }
```
