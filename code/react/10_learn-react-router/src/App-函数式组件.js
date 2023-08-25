import React from 'react'
import { Link, NavLink, useRoutes, useNavigate } from 'react-router-dom'

import './style.css'

import routes from './router'

export function App(props) {
  const navigate = useNavigate()
  // js方式页面跳转
  function goCommodityPage(query) {
    navigate(query)
  }

  return (
    <div>
      <div className="header">
        <Link to="/home">首页</Link>
        <NavLink to="/about">关于</NavLink>
        <button onClick={() => goCommodityPage('/commodity')}>商品</button>
      </div>
      {/* 映射表 */}
      <div>{useRoutes(routes)}</div>
    </div>
  )
}

export default App
