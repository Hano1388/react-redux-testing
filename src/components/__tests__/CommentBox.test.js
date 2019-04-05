import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

describe('<CommentBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<CommentBox />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('has the correct className', () => {
    expect(wrapper.render().hasClass('comment-box')).toEqual(true);
  });
  it('has a text area', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find('textarea').length).toEqual(1);
  });
  it('has a button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
