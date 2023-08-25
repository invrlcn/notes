import React, { PureComponent } from 'react'
import withRouter from '../hoc/wrapper-router'

export class HomeNews extends PureComponent {
  detailPage(query) {
    const { navigate } = this.props.router
    navigate(query)
  }
  render() {
    return (
      <div>
        <h2>HomeNews page</h2>
        <button onClick={() => this.detailPage('/detail/321')}>新闻详情</button>
        <button onClick={() => this.detailPage('/user?id=123&name=bob')}>
          用户详情
        </button>
      </div>
    )
  }
}

export default withRouter(HomeNews)
