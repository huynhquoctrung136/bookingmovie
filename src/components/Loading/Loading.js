import React, { Fragment } from 'react'
import logoLoading from './loading.gif'
import { useSelector } from 'react-redux'

const Loading = () => {
  const { isLoading } = useSelector((state) => state.Loading)
  return (
    <Fragment>
      {isLoading ? (
        <div className="bgLoading">
          <img src={logoLoading} alt="loading" />
        </div>
      ) : (
        ''
      )}
    </Fragment>
  )
}

export default Loading
