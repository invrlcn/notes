import React, { PureComponent } from 'react'
import withRouter from '../hoc/wrapper-router'

export class User extends PureComponent {
  render() {
    const { query } = this.props.router
    return (
      <div>
        <h2>user page</h2>
        <h3>
          {query.id} --- {query.name}
        </h3>
      </div>
    )
  }
}

export default withRouter(User)
