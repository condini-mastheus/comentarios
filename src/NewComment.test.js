import React from 'react';
import NewComment from './components/NewComment';

import { shallow, mount, render } from 'enzyme'

describe('<NewComment />', () => {
  const postNewCommentMock = jest.fn()
  
  it('renders without crashing', () => {
    
    const wrapper = shallow(<NewComment postNewComment={postNewCommentMock} />)
    expect(wrapper.length).toBe(1)
  });
  
  it('handles Enter', () => {
    const eventMock = {
      preventDefault: jest.fn(),
      keyCode: 13,
    }

    const wrapper = mount(<NewComment postNewComment={postNewCommentMock} />)
    
    wrapper.instance().refs.comment.value = 'test'
    wrapper.instance().handleEnter(eventMock)

    expect(eventMock.preventDefault.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls.length).toBe(1)
    expect(postNewCommentMock.mock.calls[0][0].comment).toBe('test')
    expect(wrapper.instance().refs.comment.value).toBe('')

  });

})
