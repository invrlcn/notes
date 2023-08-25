import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function withRouter(OriginComponent) {
  return function (props) {
    // 1. 导航
    const navigate = useNavigate()

    // 2.动态路由的参数: /detail/:id
    const param = useParams()

    // 3.查询字符串的参数: /user?id=123&name=bob
    const [searchParams] = useSearchParams()
    // Object.fromEntries() 将一个键值对列表转化成普通对象
    const query = Object.fromEntries(searchParams)

    const router = { navigate, param, query }
    return <OriginComponent {...props} router={router}></OriginComponent>
  }
}

export default withRouter
