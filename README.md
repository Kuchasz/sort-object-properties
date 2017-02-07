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
import sort from 'sort-object-properties';
//CommonJS
var sort = require('sort-object-properties');
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

---

`SortFunction`

| Argument   | Type             | Optional | Description         |
| ---------- | :--------------: | :------: | :----------         |
| a          | `PropertyObject` | _true_   | Left side property  |
| b          | `PropertyObject` | _true_   | Right side property |

---

`PropertyObject`

| Property   | Type                         | Optional | Description               |
| ---------- | :--------------------------: | :------: | :------------------------ |
| key        | `string`, `number`, `Symbol` | _true_   | Key used in parent object |
| value      | `any`                        | _true_   | Value assigned to key     |

### value function
_Sorts object properties by its values._

| Argument      | Type                      | Optional | Description                           |
| ------------- | :-----------------------: | :------: | :----------                           |
| obj           | `Object`                  | _false_  | Object to sort                        |
| direction     | `SortDirection`, `Number` | _true_   | Sort direction                        |
| valueSelector | `Function`                | _true_   | Function that return simple value from complex type properties  |

### key function
_Sorts object properties by its keys._

| Argument   | Type                      | Optional | Description      |
| ---------- | :-----------------------: | :------: | :--------------- |
| obj        | `PropertyObject`          | _false_  | Object to sort   |
| direction  | `SortDirection`, `Number` | _true_   | Sort direction   |

### sortDirection constant
_Constant with sort directions, use that const or just use plain numbers in function calls._

| Name | Value |
| ---- | --- |
| ascending | 1 |
| descending | -1 |

## Examples
### Sort by values using global function
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

### Sort by values using values function
```javascript
import { value as sortByValue } from 'sort-object-properties';

const objectWithUnsortedValues = {
    key1: 'd',
    key2: 'a',
    key3: 'e',
    key4: 'b',
    key5: 'c'
};

var sortedObject = sortByValue(objectWithUnsortedValues);

console.log(sortedObject);
/*
    key2: 'a',
    key4: 'b',
    key5: 'c'
    key1: 'd',
    key3: 'e',
*/
```

### Sort by keys using key function
```javascript
import { key as sortByKey, sortDirection } from 'sort-object-properties';

const objectWithUnsortedKeys = {
    key4: 'e',
    key1: 'c',
    key3: 'c',
    key2: 'd',
    key5: 'a'
};

var sortedObject = sortByKey(objectWithUnsortedKeys, sortDirection.descending);

console.log(sortedObject);
/*
    key5: 'a',
    key4: 'e',
    key3: 'c',
    key2: 'd',
    key1: 'c'
*/
```