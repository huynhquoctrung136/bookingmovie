import React from 'react'
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
          <a className="navbar-brand" href="#">
            <img src={logoBrand} alt="logoBrand" />
          </a>
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
            <ul className="navbar-nav" style={{marginLeft:"auto"}}>
              <li className="nav-item active line">
                <a className="nav-link" aria-current="page" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item line">
                <a className="nav-link" href="#">
                  Lịch chiếu
                </a>
              </li>
              <li className="nav-item line">
                <a className="nav-link" href="#">
                  Tin tức
                </a>
              </li>
              <li className="nav-item line">
                <a className="nav-link" href="#">
                  Đăng ký
                </a>
              </li>
              <li className="nav-item line">
                <a className="nav-link" href="#">
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
