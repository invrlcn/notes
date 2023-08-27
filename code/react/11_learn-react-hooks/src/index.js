import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './12_redux中的hooks/store-02'
// import App from './01_计数器实现对比/app-hooks'
// import App from './02_useState的使用/app'
// import App from './03_useEffect的使用/05_useEffect-控制执行回调'
// import App from './04_useContext的使用/app'
// import App from './05_useReducer的使用/app'
// import App from './06_useCallback的使用/app'
// import App from './07_useMemo的使用/app'
// import App from './08_UseRef的使用/app'
// import App from './09_useImperativeHandle的使用/app'
// import App from './10_useLayoutEffect的使用/app'
// import App from './11_自定义hooks/03_获取窗口滚动位置'
// import App from './13_useId的使用/app'
// import App from './14_useTransition的使用/app'
import App from './15_useDeferredValue的使用/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
