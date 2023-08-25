import React, { PureComponent } from 'react'
import { Link, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import withRouter from './hoc/wrapper-router'
import './style.css'

import Home from './pages/home'
import HomeNews from './pages/home-news'
import About from './pages/about'
import NotFound from './pages/not-found'
import Commodity from './pages/commodity'
import User from './pages/user'
import Detail from './pages/detail'

export class App extends PureComponent {
  // js方式页面跳转
  goCommodityPage(query) {
    const { navigate } = this.props.router
    navigate(query)
  }

  render() {
    return (
      <div>
        <div className="header">
          <Link to="/home">首页</Link>
          <NavLink to="/about">关于</NavLink>
          <button onClick={() => this.goCommodityPage('/commodity')}>
            商品
          </button>
        </div>
        {/* 映射表 */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}>
            <Route
              path="/home"
              element={<Navigate to="/home/home-news" />}
            ></Route>
            <Route
              path="/home/home-news"
              element={<HomeNews></HomeNews>}
            ></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/commodity" element={<Commodity />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
    )
  }
}

export default withRouter(App)
