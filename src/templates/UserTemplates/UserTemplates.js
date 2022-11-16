import React, { Fragment } from 'react'
import { Route } from 'react-router'
const UserTemplates = (props) => {
  const { Component, ...restProps } = props
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div class="user__template">
            <Component {...propsRoute} />
          </div>
        )
      }}
    ></Route>
  )
}

export default UserTemplates
