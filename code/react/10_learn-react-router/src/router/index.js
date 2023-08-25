import React from 'react'
import { Navigate } from 'react-router-dom'

import Home from '../pages/home'
import HomeNews from '../pages/home-news'
import About from '../pages/about'
import NotFound from '../pages/not-found'
import Commodity from '../pages/commodity'

// import User from '../pages/user'
// import Detail from '../pages/detail'

// 路由懒加载
const User = React.lazy(() =>
  import(/*webpackChunkName: 'user'*/ '../pages/user')
)
const Detail = React.lazy(() =>
  import(/*webpackChunkName: 'detail'*/ '../pages/detail')
)

const routes = [
  { path: '/', element: <Navigate to="/home" /> },
  {
    path: '/home',
    element: <Home />,
    children: [
      { path: '/home', element: <Navigate to="/home/home-news" /> },
      { path: '/home/home-news', element: <HomeNews /> }
    ]
  },
  { path: '/about', element: <About /> },
  { path: '/commodity', element: <Commodity /> },
  { path: '/user/', element: <User /> },
  { path: '/detail/:id', element: <Detail /> },
  { path: '/*', element: <NotFound /> }
]

export default routes
