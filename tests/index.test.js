import sort, { value as byValue, key as byKey, sortDirection } from '../src/index';

const _sortedAscendingKeys = ['a', 'b', 'c', 'd', 'e'];

const _sortedDescendingKeys = ['e', 'd', 'c', 'b', 'a'];

const _unsortedKeysObject = {
    d: 'value1',
    c: 'value2',
    e: 'value3',
    b: 'value4',
    a: 'value5'
};

const _sortedAscendingValues = ['a', 'b', 'c', 'd', 'e'];

const _sortedDescendingValues = ['e', 'd', 'c', 'b', 'a'];

const _unsortedValuesObject = {
    key1: 'd',
    key2: 'a',
    key3: 'e',
    key4: 'b',
    key5: 'c'
};



const _sortedAscendingComplexValues = {
    key1: {
        prop: 'a'
    },
    key2: {
        prop: 'b'
    },
    key3: {
        prop: 'c'
    }
};

const _sortedDescendingComplexValues = {
    key3: {
        prop: 'c'
    },
    key2: {
        prop: 'b'
    },
    key1: {
        prop: 'a'
    }
};

const _unsortedComplexValuesObject = {
    key2: {
        prop: 'b'
    },
    key3: {
        prop: 'c'
    },
    key1: {
        prop: 'a'
    }
};

describe('sort-object-properties', () => {
    describe('with global function', () => {

        test('ascending by key',() => {
            const _sortedObject = sort(_unsortedKeysObject);
            expect(Object.keys(_sortedObject)).toEqual(_sortedAscendingKeys);
        });

        test('descending by key',() => {
            const _sortedObject = sort(_unsortedKeysObject, ({key: aKey}, {key: bKey}) => aKey < bKey);
            expect(Object.keys(_sortedObject)).toEqual(_sortedDescendingKeys);
        });

        test('ascending by simple value', () => {
            const _sortedObject = sort(_unsortedValuesObject, ({value: aVal}, {value: bVal}) => aVal > bVal);
            expect(Object.values(_sortedObject)).toEqual(_sortedAscendingValues);
        });

        test('descending by simple value', () => {
            const _sortedObject = sort(_unsortedValuesObject, ({value: aVal}, {value: bVal}) => aVal < bVal);
            expect(Object.values(_sortedObject)).toEqual(_sortedDescendingValues);
        });

    });

    describe('with key', () => {

        test('default (ascending)',() => {
            const _sortedObject = byKey(_unsortedKeysObject);
            expect(Object.keys(_sortedObject)).toEqual(_sortedAscendingKeys);
        });

        test('ascending',() => {
            const _sortedObject = byKey(_unsortedKeysObject, 1);
        expect(Object.keys(_sortedObject)).toEqual(_sortedAscendingKeys);
        });

        test('descending',() => {
            const _sortedObject = byKey(_unsortedKeysObject, -1);
            expect(Object.keys(_sortedObject)).toEqual(_sortedDescendingKeys);
        });

    });

    describe('with simple value', () => {

        test('default (ascending)', () => {
            const _sortedObject = byValue(_unsortedValuesObject);
            expect(Object.values(_sortedObject)).toEqual(_sortedAscendingValues);
        });

        test('ascending', () => {
            const _sortedObject = byValue(_unsortedValuesObject, sortDirection.ascending);
            expect(Object.values(_sortedObject)).toEqual(_sortedAscendingValues);
        });

        test('descending', () => {
            const _sortedObject = byValue(_unsortedValuesObject, sortDirection.descending);
            expect(Object.values(_sortedObject)).toEqual(_sortedDescendingValues);
        });

    });

    describe('with complex value', () => {

        test('ascending', () => {
            const _sortedObject = byValue(_unsortedComplexValuesObject, sortDirection.ascending, (value) => value.prop);
            expect(_sortedObject).toEqual(_sortedAscendingComplexValues);
        });

        test('descending', () => {
            const _sortedObject = byValue(_unsortedComplexValuesObject, sortDirection.descending, (value) => value.prop);
            expect(_sortedObject).toEqual(_sortedDescendingComplexValues);
        });

    });

    describe('constant values', () => {

        test('ascending direction', () => {
            expect(sortDirection.ascending).toEqual(1);
        });

        test('descending direction', () => {
            expect(sortDirection.descending).toEqual(-1);
        });

    });

});