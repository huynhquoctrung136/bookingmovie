import React from 'react'
import { NavLink } from 'react-router-dom'
import logoTix from './logoTix.png'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction'
const Login = () => {
  const dispatch = useDispatch();
  const {userLogin}=useSelector(state=>state.QuanLyNguoiDung);
  // console.log("userLogin", userLogin);
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: (values) => {
      dispatch(dangNhapAction(values))
      console.log("values",values);
     
    },
  })

  return (
    <div className="login">
      <div className="login__content">
        <div className="loginContent__header container">
          <img src={logoTix} alt="logoTix" />
          <p>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
        </div>
        <div className="loginContent__Form">
          <form
            onSubmit={(event) => {
              event.preventDefault()
              formik.handleSubmit(event)
            }}
            className="col-10 mx-auto"
          >
            <div className="form-group">
              <label>Tài Khoản</label>
              <input
                name="taiKhoan"
                type="text"
                className="form-control"
                placeholder="Nhập vào tài khoản"
                value={formik.values.taiKhoan}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                name="matKhau"
                type="password"
                className="form-control"
                placeholder="Nhập vào mật khẩu"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <NavLink to="/register">
                <p className="text-success" style={{ fontSize: '18px' }}>
                  * Đăng Ký
                </p>
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
              <i className="fa fa-times"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login
