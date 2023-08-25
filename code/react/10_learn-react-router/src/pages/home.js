import React, { PureComponent } from 'react'
import { Outlet } from 'react-router-dom'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>home page</h2>
        <hr />
        {/* 子路由占位 */}
        <Outlet></Outlet>
      </div>
    )
  }
}

export default Home
