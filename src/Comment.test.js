import React from 'react';
import Comment from './components/Comment';

import { shallow, mount, render } from 'enzyme'

describe('<Comment />', () => {
  it('renders without crashing', () => {
    const comment = {
      comment: 'test'
    }

    const wrapper = shallow(<Comment comment={comment}/>)
    expect(wrapper.length).toBe(1)
    expect(wrapper.find('.card').length).toBe(1)
    expect(wrapper.text()).toBe(comment.comment)
  });

})
