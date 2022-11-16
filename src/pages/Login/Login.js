import React from 'react'
import { NavLink } from 'react-router-dom'
import logoTix from './logoTix.png'

const Login = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="loginContent__header container">
          <img src={logoTix} alt="logoTix" />
          <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
        </div>
        <div className="loginContent__Form">
          <form className="col-10 mx-auto">
            <div className="form-group">
              <label>Tài Khoản</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input type="password" className="form-control" />
            </div>
            <div className="form-group">
              <NavLink to="/register">
                <p className="text-success" style={{fontSize:"18px"}}>* Đăng Ký</p>
              </NavLink>
            </div>
            <div className="form-group">
              <button className="btn--login">Đăng Nhập</button>
            </div>
          </form>
        </div>
        <div className="loginContent__Close">
          <NavLink to="/">
            <button className="btn btn__close">
              <i class="fa fa-times"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login
