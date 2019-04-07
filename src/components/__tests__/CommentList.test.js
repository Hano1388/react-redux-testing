import React from 'react';
import { shallow } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

describe('<CommentList />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Root>
        <CommentList />
      </Root>
    );
  });

  it('renders two (li)s', () => {
    // expect(wrapper.find('li').length).toEqual(2);
    // console.log(wrapper.render().text());
    // console.log(wrapper.render().find('li').length)
    expect(wrapper.render().find('li').length).toEqual(2);
  });

  it('show each comment that is provided', () => {
    expect(wrapper.render().text()).toContain('First Comment');
    expect(wrapper.render().text()).toContain('Second Comment');
  });

});
