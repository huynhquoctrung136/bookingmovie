import React from 'react'
import { Route } from 'react-router'
import BackgroundLogin from './logoLogin.jpg'
const UserTemplates = (props) => {
  const { Component, ...restProps } = props
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div
            style={{ backgroundImage: `url(${BackgroundLogin})` }}
            className="user__template"
          >
            <Component {...propsRoute} />
          </div>
        )
      }}
    ></Route>
  )
}

export default UserTemplates
