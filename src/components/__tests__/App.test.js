import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('shows comment box', () => {
    expect(wrapper.render().hasClass('comment-box')).toEqual(true);
  });

});
