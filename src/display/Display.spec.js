// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
  it('renders the count of balls and strikes passed in', () => {
    const { getByText, debug } = render(<Display locked={false} closed={false} />);
    debug();
    // console.log('body', document.body.outerHTML);

    getByText(/3 balls/i);
    getByText(/2 strikes/i);
  });

  it('unmounts component after each test', () => {
    console.log(document.body.outerHTML);
  });
});

/*
- [x] display the count of `balls` and `strikes` for the at-bat.

- resets both balls and strikes to 0 when a player reaches 3 strikes or 4 balls.
- resets both balls and strikes to 0 when a player connects any type of hit.
*/

// displays if gate is open/closed and if it is locked/unlocked
// displays 'Closed' if the closed prop is true and 'Open' if otherwise
// displays 'Locked' if the locked prop is true and 'Unlocked' if othewise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class