import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

describe('<CommentBox />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <CommentBox />
    );
  });
  afterEach(() => {
    wrapper.unmount(
      <CommentBox />
    );
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

  describe('CommentBox textarea', () => {
    beforeEach(() => {
      wrapper.find('textarea').simulate('change', {
        target: { value: 'New Comment' }
      });
      wrapper.update();
    });
    it('shows text that is entered', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual('New Comment');
    });
    it('when submitted, clears the textarea', () => {
      wrapper.find('form').simulate('submit');
      expect(wrapper.find('textarea').prop('value')).toContain('');
    });
  });

});
