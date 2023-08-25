import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App-函数式组件'
import { HashRouter, BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Suspense fallback={<h2>Loading...</h2>}>
      <App />
    </Suspense>
  </BrowserRouter>
)
