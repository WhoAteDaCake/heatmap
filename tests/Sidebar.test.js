import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Sidebar from '../src/components/Sidebar.js';

test('Sidebar', () => {
  // ReactDOM.render(<Sidebar />, document.body);
  const testUnit = renderer.create(
    <Sidebar />
  );
  const tree = testUnit.toJSON();
  expect(testUnit).toBe(false);
});
