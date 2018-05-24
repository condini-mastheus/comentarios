import React from 'react';
import App from './App';

import { shallow, mount, render } from 'enzyme'

describe('<App />', () => {
  const base = {
    syncState: jest.fn()
  }
  const auth = {
    onAuthStateChanged: jest.fn()
  }

  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} auth={auth} />)
    expect(wrapper.length).toBe(1)
  });

  it('should have .container class', () => {
    const wrapper = shallow(<App base={base} auth={auth} />)
    expect(wrapper.is('.container')).toBe(true)
  })

  it('shows comments', () => {
    const wrapper = shallow(<App base={base} auth={auth} />)
    expect(wrapper.find('Comments').length).toBe(1)
  })

  it('shows new comment', () => {
    const wrapper = shallow(<App base={base} auth={auth} />)
    expect(wrapper.find('NewComment').length).toBe(0)
  })

  it('adds a new comment to state when postNewComment is called', () => {
    const wrapper = mount(<App base={base} auth={auth} />)
    wrapper.instance().postNewComment({ comment: 'teste'})
    const comments = Object.keys(wrapper.instance().state.comments)

    expect(comments.length).toBe(1)
  })

  // it('outputs the <App />', () => {
  //   const wrapperShallow = shallow(<App base={base} />)
  //   const wrapperMount = mount(<App base={base} />)
  //   const wrapperRender = render(<App base={base} />)

  //   console.log(wrapperShallow.debug())
  //   console.log(wrapperMount.debug())
  //   console.log(wrapperRender.html())
  // })
})
