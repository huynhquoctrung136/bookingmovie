import React, { Fragment } from 'react'
import { Route } from 'react-router'
import Header from '../../components/Header'
const HomeTemplates = (props) => {
  const { Component, ...restProps } = props
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header/>
            <h1 className="text-danger">Đây là homepage</h1>
            <Component {...propsRoute} />
          </Fragment>
        )
      }}
    ></Route>
  )
}

export default HomeTemplates
