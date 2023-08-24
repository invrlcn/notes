import React, { PureComponent } from 'react'
import store from '../store'
import { changeCounter } from '../store/actionCreators'

export class About extends PureComponent {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({ counter: store.getState().counter })
    })
  }

  decrement(num) {
    store.dispatch(changeCounter(num))
  }

  render() {
    return (
      <div>
        <h2>about counter: {store.getState().counter}</h2>
        <button onClick={e => this.decrement(-1)}>-1</button>
        <button onClick={e => this.decrement(-5)}>-5</button>
      </div>
    )
  }
}

export default About
