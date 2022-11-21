import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Tabs } from 'antd'
import logoPayment from './payment.png'
import Screen from "./screen.png"
const Checkout = (props) => {
  const [tabPosition, setTabPosition] = useState('right')
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value)
  }
  return (
    <div
      style={{
        backgroundImage: `url(https://movie-booking-project.vercel.app/img/bgAuth.jpg)`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <div className="detailBooking">
          <div className="row">
            <div className="col-8">
              <div className="bookingTicket__content">
                <div className="bookingTicketContent__info">
                  <div className="bookingTicket__tabs">
                    <div>
                      <Tabs defaultActiveKey="1">
                        <Tabs.TabPane
                          tab={
                            <div
                              style={{
                                backgroundImage: { logoPayment },
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                textAlign: 'center',
                              }}
                            >
                              <i className="fa fa-credit-card"></i>
                              <p className="bookingTicketTabs__title">
                                CHỌN GHẾ VÀ THANH TOÁN
                              </p>
                            </div>
                          }
                          key="1"
                        >
                          <div className="bookingSeatContent">
                            <div className="bookingSeatContent__info">
                              <div className="bookingCinema__name d-flex">
                                <img
                                  src="https://movie-booking-project.vercel.app/img/logo-theater/bhd.png"
                                  alt=""
                                />
                                <div className="bookingCinemaName__des">
                                  <p>BHD Star Cineplex 3/2</p>
                                  <p>Thứ tư - 02:05 - Rạp 1</p>
                                </div>
                              </div>
                            </div>

                            <div className='bookingSeatContent__seat'>
                                <div className='bookingSeatContent__screen'>
                                    <img className='img-fluid' src={Screen} alt=''/>
                                </div>
                                <div className='bookingSeatContent__select'></div>
                            </div>
                          </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane
                          value={tabPosition}
                          tab={
                            <div
                              style={{
                                backgroundImage: { logoPayment },
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                textAlign: 'center',
                              }}
                            >
                              <i className="fa fa-check"></i>
                              <p className="bookingTicketTabs__title">
                                KẾT QUẢ ĐẶT VÉ
                              </p>
                            </div>
                          }
                          key="2"
                        >
                          Content of Tab Pane 2
                        </Tabs.TabPane>
                        <Tabs.TabPane
                          tab={
                            <NavLink to="/home">
                              <div
                                style={{
                                  backgroundImage: { logoPayment },
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'cover',
                                  textAlign: 'center',
                                }}
                              >
                                <i className="fa fa-home"></i>
                                <p className="bookingTicketTabs__title">
                                  Trang Chủ
                                </p>
                              </div>
                            </NavLink>
                          }
                          key="3"
                        ></Tabs.TabPane>
                        <Tabs.TabPane
                          tab={
                            <NavLink to="/profile">
                              <div
                                style={{
                                  backgroundImage: `https://i.pravatar.cc/300?u=nguyenvanteo2506`,
                                  backgroundRepeat: 'no-repeat',
                                  backgroundSize: 'cover',
                                  textAlign:"center"
                                }}
                              >
                                <img
                                  style={{ width: '50px', height:"50px", borderRadius:"50%"}}
                                  src={`https://i.pravatar.cc/300?u=nguyenvanteo2506`}
                                  alt=""
                                />
                              </div>
                              <p className="bookingTicketTabs__title">
                                NGUYỄN VĂN TEO
                              </p>
                            </NavLink>
                          }
                          key="4"
                        ></Tabs.TabPane>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="detailBooking__content">
                <div>
                  <p className="detailBookingContent__price">0 đ</p>
                  <div className="detailBookingContent__des">
                    <p className="detailBookingContent__name">Nghề Siêu dễ</p>
                    <p>BHD Star Cineplex - 3/2</p>
                    <p>Thứ tư 25/05/2022 - 02:05 - Rạp 1</p>
                  </div>
                  <div className="detailBookingContent__InfoBooking">
                    <span>Ghế</span>
                    <p className="detailBookingContentInfoBooking__price">
                      0 đ
                    </p>
                  </div>
                  <div className="detailBookingContent__form">
                    <span>Email</span>
                    <p>huynhquoctrung271@gmail.com</p>
                  </div>
                </div>
                <NavLink to="" className="detailBooking__button nav-link">
                  <button className="button button--booking">Đặt Vé</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
