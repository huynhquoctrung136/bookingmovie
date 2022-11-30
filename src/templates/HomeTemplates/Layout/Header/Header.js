import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logoBrand from './assets/logo.svg'
import _ from 'lodash'
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config'
import { history } from '../../../../Layout'
import { SearchOutlined } from '@ant-design/icons'
const Header = (props) => {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDung)
  // console.log('userLogin', userLogin);

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <li className="nav-item line">
            <NavLink className="myNavBar__navLink" to="/login">
              Đăng Nhập
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
            <div className="dropdown dropdown__items">
              <div
                className="dropdown-toggle "
                id="dropdownMenuButton1__header"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://picsum.photos/200"
                  style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                  alt="profile"
                />{' '}
                <span style={{ color: 'white' }}> {userLogin.hoTen}</span>
              </div>
              <ul
                className="dropdown-menu dropdownMenu__header"
                aria-labelledby="dropdownMenuButton1__header"
              >
                <li>
                  <NavLink className="dropdownMenu__Link" to="/profile">
                    Thông Tin Tài Khoản
                  </NavLink>
                </li>

                {userLogin.maLoaiNguoiDung === 'QuanTri' ? (
                  <li>
                    <NavLink className="dropdownMenu__Link" to="/admin">
                      Admin
                    </NavLink>
                  </li>
                ) : (
                  ''
                )}
              </ul>
            </div>
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
        <SearchOutlined />
      </p>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark myNavBar">
        <div className="container-md">
          <NavLink className="navbar-brand" to="">
            <img src={logoBrand} alt="logoBrand" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#movieNavBar"
            aria-controls="movieNavBar"
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
