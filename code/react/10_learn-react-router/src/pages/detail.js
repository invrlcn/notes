import React, { PureComponent } from 'react'
import withRouter from '../hoc/wrapper-router'

export class Detail extends PureComponent {
  render() {
    const { param } = this.props.router
    return (
      <div>
        <h2>detail page</h2>
        <h3>{param.id}</h3>
      </div>
    )
  }
}

export default withRouter(Detail)
