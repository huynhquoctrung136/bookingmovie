import React from 'react'
import { NavLink } from 'react-router-dom'
import logoBrand from './assets/logo.svg'
const Header = (props) => {



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
                <NavLink  className="myNavBar__navLink" to="/">
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
              <li className="nav-item line">
                <NavLink className="myNavBar__navLink" to="">
                  Đăng ký
                </NavLink>
              </li>
              <li className="nav-item line">
                <NavLink className="myNavBar__navLink" to="">
                  Đăng nhập
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
