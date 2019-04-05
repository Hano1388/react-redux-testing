import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('shows text React Redux Testing Starter', () => {
    expect(wrapper.find('div').text()).toContain('React Redux Testing Starter');
  });
});
