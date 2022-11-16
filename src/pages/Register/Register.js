import React from 'react'
import { NavLink } from 'react-router-dom'
import logoTix from './logoTix.png'
const Register = () => {
  return (
    <div className='register'>
      <div className="register__content">
        <div className="registerContent__header container">
          <img src={logoTix} alt="logoTix" />
          <p>Đăng Ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
        </div>
        <div className="registerContent__Form">
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
              <label>Họ và tên</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="text" className="form-control" />
            </div>
            <div className='form-group'>
            <button className='btn--register'>Đăng ký</button>
            </div>
          </form>
        </div>
        <div className="registerContent__Close">
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

export default Register