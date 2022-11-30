import React from 'react'
import { NavLink } from 'react-router-dom'
import logoTix from './logoTix.png'
import { CloseOutlined } from '@ant-design/icons'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction'
const Register = (props) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: 'GP00',
      hoTen: '',
    },
    onSubmit: (values) => {
      // console.log('values', values)
      dispatch(dangKyAction(values))
    },
  })

  return (
    <div className="register">
      <div className="register__content">
        <div className="registerContent__header container">
          <img src={logoTix} alt="logoTix" />
          <p>Đăng Ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!</p>
        </div>
        <div className="registerContent__Form">
          <form
            className="col-10 mx-auto"
            onSubmit={(e) => {
              formik.handleSubmit(e)
            }}
          >
            <div className="form-group">
              <label>Tài Khoản</label>
              <input
                type="text"
                name="taiKhoan"
                className="form-control"
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
                value={formik.values.matKhau}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Họ và tên</label>
              <input
                name="hoTen"
                type="text"
                className="form-control"
                value={formik.values.hoTen}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                name="soDt"
                type="text"
                className="form-control"
                value={formik.values.soDt}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn--register">Đăng ký</button>
            </div>
          </form>
        </div>
        <div className="registerContent__Close">
          <NavLink to="/">
            <button className="btn btn__close">
              <CloseOutlined />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Register
