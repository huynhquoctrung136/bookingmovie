import React, { Fragment, useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { USER_LOGIN } from '../../util/settings/config'

const CheckoutTemplates = (props) => {
  const { Component, ...restProps } = props

  if(!localStorage.getItem(USER_LOGIN)){
    return <Redirect to='/login'></Redirect>
  }
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {

        return (
          <>
            <Component {...propsRoute} />
          </>
        )
      }}
    ></Route>
  )
}

export default CheckoutTemplates