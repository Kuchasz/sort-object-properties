import sort from '../src/index';

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

describe('sort-object-properties', () => {
    describe('by key', () => {

        test('ascending',() => {
            const _sortedObject = sort(_unsortedKeysObject);
            expect(Object.keys(_sortedObject)).toEqual(_sortedAscendingKeys);
        });

        test('descending',() => {
            const _sortedObject = sort(_unsortedKeysObject, ({key: aKey}, {key: bKey}) => (aKey <= bKey));
            expect(Object.keys(_sortedObject)).toEqual(_sortedDescendingKeys);
        });

    });

    describe('by simple value', () => {

        test('ascending', () => {
            const _sortedObject = sort(_unsortedValuesObject, ({value: aVal}, {value: bVal}) => (aVal >= bVal));
            expect(Object.values(_sortedObject)).toEqual(_sortedAscendingValues);
        });

        test('descending', () => {
            const _sortedObject = sort(_unsortedValuesObject, ({value: aVal}, {value: bVal}) => (aVal <= bVal));
            expect(Object.values(_sortedObject)).toEqual(_sortedDescendingValues);
        });

    });
});