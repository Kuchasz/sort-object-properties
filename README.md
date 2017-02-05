# sort-object-properties
Utility that return copy of object with sorted keys

## Installation
```
npm install sort-object-properties --save
```

## Usage
### Import
```javascript
//ES6
import sort from _sortGlobal;
//CommonJS
var sort = require(_sortGlobal);
```

### Simple call
```javascript
const objectWithUnsortedKeys = {
    d: 'value1',
    c: 'value2',
    e: 'value3',
    b: 'value4',
    a: 'value5'
};

var sortedObject = sort(objectToSort);

console.log(sortedObject); 
/*
    a: 'value5',
    b: 'value4',
    c: 'value2',
    d: 'value1',
    e: 'value3'
*/
```
## API
### Global function
_By default sorts object ascending by its keys. Use second parameter if need more flexibility._

| Argument      | Type           | Optional | Description                  |           
| ------------- | :---:          | :------: | :--------------------------- |
| obj           | `Object`       | _false_  | Object to sort               |
| sortFunction  | `SortFunction` | _true_   | Function used to sort object |

##### SortFunction

| Argument   | Type             | Optional | Description         |
| ---------- | :--------------: | :------: | :----------         |
| a          | `PropertyObject` | _true_   | Left side property  |
| b          | `PropertyObject` | _true_   | Right side property |

##### PropertyObject
| Property   | Type                         | Optional | Description               |
| ---------- | :--------------------------: | :------: | :------------------------ |
| key        | `string`, `number`, `Symbol` | _true_   | Key used in parent object |
| value      | `any`                        | _true_   | Value assigned to key     |

### Value function

### Key function

## Examples
### Sort by values
```javascript
const objectWithUnsortedValues = {
    key1: 'd',
    key2: 'a',
    key3: 'e',
    key4: 'b',
    key5: 'c'
};

//ES6 syntax
var sortedObject = sort(objectWithUnsortedValues, ({value: valueA}, {value: valueB}) => valueA > valueB);
//ES5 syntax
var sortedObject = sort(objectWithUnsortedValues, function (a, b){ return a.value > b.value;});

console.log(sortedObject);
/*
    key2: 'a',
    key4: 'b',
    key5: 'c'
    key1: 'd',
    key3: 'e',
*/
```