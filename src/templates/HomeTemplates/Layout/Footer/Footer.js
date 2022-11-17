import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRap)
  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ['maHeThongRap', 'tenHeThongRap', 'logo']),
  )
  return (
    <footer className="section">
      <div className="footer__content">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h3>TIX</h3>
              <ul>
                <li>
                  <NavLink to="#">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="#">Brand</NavLink>
                </li>
                <li>
                  <NavLink to="#">Guidelines</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Điều Khoảng Sử Dụng</h3>
              <ul>
                <li>
                  <NavLink to="#">Điều Khoản Chung</NavLink>
                </li>
                <li>
                  <NavLink to="#">Điều Khoản Giao Dịch</NavLink>
                </li>
                <li>
                  <NavLink to="#">Chính Sách Thanh Toán</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h3>Đối tác</h3>
              <div className="footerContent__partner">
                {arrHeThongRap?.map((htr, index) => {
                  return (
                    <div key={`footerContent__parner-${index}`} className="footerContentPartner__logo">
                      <NavLink to="#">
                        <img src={htr.logo} alt="footerLogo" />
                      </NavLink>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="col-3">
              <h3>Kết nối với chúng tôi</h3>
              <ul>
                <li>
                  <NavLink to="#">
                    <i className="fab fa-facebook"></i>Facebook
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i className="fab fa-twitter"></i>Twitter
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i className="fab fa-google"></i>Google
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copyright">
            <p>2022 © Huỳnh Quốc Trung /FrontEnd Developer </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
