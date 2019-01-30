// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Display from './Display';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

/* Tests:
  - [X] displays if gate is open/closed and if it is locked/unlocked
    - [X] Gate Closed and Locked
    - Gate Closed and Unlocked
    - Gate Open and Unlocked
  - displays 'Closed' if the closed prop is true and 'Open' if otherwise
  - displays 'Locked' if the locked prop is true and 'Unlocked' if othewise
  - when locked or closed use the red-led class
  - when unlocked or open use the green-led class
*/

describe('<Display />', () => {
  it('Gate Closed and Locked', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    getByText(/closed/i);
    getByText(/locked/i);
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