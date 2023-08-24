import React, { PureComponent } from 'react'
import store from '../store'
import { changeCounter } from '../store/actionCreators'

export class Home extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ counter: store.getState().counter })
    })
  }

  increment(num) {
    store.dispatch(changeCounter(num))
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>home counter: {counter}</h2>
        <button onClick={e => this.increment(1)}>+1</button>
        <button onClick={e => this.increment(5)}>+5</button>
      </div>
    )
  }
}

export default Home
