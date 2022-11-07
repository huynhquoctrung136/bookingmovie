import React, { Fragment } from 'react'
import { Route } from 'react-router'
import Header from './Layout/Header/Header'
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel'

const HomeTemplates = (props) => {
  const { Component, ...restProps } = props
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute}/>
            <HomeCarousel {...propsRoute}/>
            <Component {...propsRoute} />
          </Fragment>
        )
      }}
    ></Route>
  )
}

export default HomeTemplates
