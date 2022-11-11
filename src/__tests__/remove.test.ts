import remove from '../remove';

test('Remove From Object: ', () => {
  expect(
    remove({ firstName: 'Evyatar', lastName: 'Shafran' }, 'lastName'),
  ).toStrictEqual({ firstName: 'Evyatar' });
});
