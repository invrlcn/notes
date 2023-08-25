import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      counter: 100
    }
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h2>当前计数: {counter}</h2>
        <button onClick={() => this.setState({ counter: counter + 1 })}>
          +1
        </button>
      </div>
    )
  }
}

export default App
