import React from 'react';
import { shallow } from 'enzyme';

import Root from 'Root';
import App from '../App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Root>
        <App />
      </Root>
    );
  })
  it('shows comment box', () => {
    expect(wrapper.render().hasClass('comment-box')).toEqual(true);
  });

  it('shows comment list', () => {
    expect(wrapper.render().hasClass('comment-list')).toEqual(true);
  });

});
