import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logoBrand from './assets/logo.svg'
import _ from 'lodash'
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config'
import { history } from '../../../../Layout'
const Header = (props) => {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDung)
  // console.log('userLogin', userLogin);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <li className="nav-item line">
            <NavLink className="myNavBar__navLink" to="/login">
              <i className="fa fa-user-circle"></i> Đăng nhập
            </NavLink>
          </li>
          <li className="nav-item line">
            <NavLink className="myNavBar__navLink" to="/register">
              Đăng ký
            </NavLink>
          </li>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <li className="nav-item line">
            <NavLink className="myNavBar__navLink" to="/profile">
              <img
                src="https://picsum.photos/200"
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />{' '}
              {userLogin.hoTen}
            </NavLink>
          </li>
          <li className="nav-item line">
            <NavLink
              onClick={() => {
                localStorage.removeItem(USER_LOGIN)
                localStorage.removeItem(TOKEN)
                history.goBack()
                window.location.reload()
              }}
              className="myNavBar__navLink"
              to="/"
            >
              Đăng Xuất
            </NavLink>
          </li>
        </Fragment>
      )
    }
  }

  return (
    <div className="header__content">
      <p className="bg-dark header__info pt-3">
        <i className="fas fa-phone-alt"></i>
        <span className="mx-3">+0344549065</span>
        <i className="fa fa-search"></i>
      </p>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark myNavBar">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">
            <img src={logoBrand} alt="logoBrand" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#movieNavBar"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="movieNavBar">
            <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
              <li className="nav-item line">
                <NavLink className="myNavBar__navLink" to="/">
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item line">
                <NavLink className="myNavBar__navLink" to="/">
                  Lịch chiếu
                </NavLink>
              </li>
              <li className="nav-item line">
                <NavLink className="myNavBar__navLink" to="/news">
                  Tin tức
                </NavLink>
              </li>
              <li className="nav-item line">
                <NavLink className="myNavBar__navLink" to="/contact">
                  Liên hệ
                </NavLink>
              </li>
              {renderLogin()}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
