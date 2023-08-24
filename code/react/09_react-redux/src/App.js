import React, { PureComponent } from 'react'
import Home from './pages/home'
import About from './pages/about'
import './style.css'
import store from './store'

export class App extends PureComponent {
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

  render() {
    const { counter } = this.state

    return (
      <div className="box">
        <div>
          <h2>App counter: {counter}</h2>
        </div>
        <Home></Home>
        <About></About>
      </div>
    )
  }
}

export default App
