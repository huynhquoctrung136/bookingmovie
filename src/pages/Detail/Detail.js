import React, { useEffect, useState } from 'react'
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import Logo from './movie-2.jpg'
import { Tabs, Radio, Space, Rate } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapAction'
import moment from 'moment' //npm i moment
import { NavLink } from 'react-router-dom'
const { TabPane } = Tabs

const Detail = (props) => {
  const [tabPosition, setTabPosition] = useState('left')
  const filmDetail = useSelector((state) => state.QuanLyRap.filmDetail)
  // console.log('filmDetail', filmDetail)
  const dispatch = useDispatch()

  useEffect(() => {
    let { id } = props.match.params
    dispatch(layThongTinChiTietPhim(id))
  }, [])
  return (
    <div
      className="detail"
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: '100vh' }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="container">
          <div className="detail__content">
            <div className="detailContent__Film">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex">
                    <div className="detailContent__image">
                      <div
                        style={{
                          backgroundImage: `url(${filmDetail.hinhAnh}),url(https://picsum.photos/)`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                      >
                        <img
                          src={filmDetail.hinhAnh}
                          className="img-fluid"
                          alt={filmDetail.hinhAnh}
                        />
                      </div>
                      <div className="detailContent__overplay"></div>
                      <div className="detailContent__play">
                        <NavLink to="#">
                          <i className="fa fa-play"></i>
                        </NavLink>
                      </div>
                    </div>
                    <div className="detailContent__desc d-flex">
                      <div>
                        <p className="detailContentDes__time">
                          {moment(filmDetail.ngayKhoiChieu).format(
                            'DD.MM.YYYY',
                          )}
                        </p>
                        <h3 className="detailContentDes__name">
                          {filmDetail.tenPhim}
                        </h3>
                        <p className="detailContentDes__runngTime">
                          120 phút - 10 Tix - 2D/Digital
                        </p>
                        <a href="#">
                          <button className="btn--booking">Mua Vé</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="detailRating__content">
                    <div>
                      <div className="detailRating__circle">
                        <div
                          className={`c100 p${filmDetail.danhGia * 10} green`}
                        >
                          <span>{filmDetail.danhGia * 10}%</span>
                          <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                          </div>
                        </div>
                      </div>
                      <div className="detailRating__start">
                        <div>
                          <Rate
                            allowHalf
                            value={filmDetail.danhGia / 2}
                            style={{
                              color: '#78ed78',
                              fontSize: 20,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detailContent__Tab section">
              <div className="detailTab__button">
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Lịch Chiếu" key="1">
                    <Tabs tabPosition={'left'}>
                      {filmDetail.heThongRapChieu?.map((htr, index) => {
                        return (
                          <TabPane
                            tab={
                              <div className="detailButton__htr d-flex">
                                <img
                                  style={{ width: '50px' }}
                                  src={htr.logo}
                                  alt={htr.logo}
                                />
                                <div className="detailButtonHTR__name">
                                  {htr.tenHeThongRap}
                                </div>
                              </div>
                            }
                            key={`htrc-${index}`}
                          >
                            {htr.cumRapChieu?.map((cumRap, index) => {
                              return (
                                <div
                                  key={`cumrap-${index}`}
                                  className="detailCumRapChieu__content"
                                >
                                  <div className="row">
                                    <div className="col-1">
                                      <img
                                        src={cumRap.hinhAnh}
                                        alt={cumRap.hinhAnh}
                                        onError={(e) => {
                                          e.target.onerror = null
                                          e.target.src =
                                            'https://picsum.photos/75/75'
                                        }}
                                      />
                                    </div>
                                    <div className="col-11">
                                      <div className="detailCumRapChieu_desc">
                                        <h3 className="detailCumRapChieu__name">
                                          {cumRap.tenCumRap}
                                        </h3>
                                        <p className="detailCumRapChieu__district">
                                          {cumRap.diaChi}
                                        </p>
                                        <div>
                                          {cumRap.lichChieuPhim
                                            ?.slice(0, 12)
                                            .map((lichChieu, index) => {
                                              return (
                                                <NavLink
                                                  key={`lichchieu-${index}`}
                                                  to="#"
                                                >
                                                  <button className="btn--runningTimes">
                                                    {moment(
                                                      lichChieu.ngayChieuGioChieu,
                                                    ).format('hh:mm A')}
                                                  </button>
                                                </NavLink>
                                              )
                                            })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </TabPane>
                        )
                      })}
                    </Tabs>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Thông Tin" key="2">
                    Content of Tab Pane 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Bình luận" key="3">
                    Content of Tab Pane 3
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </CustomCard>
    </div>
  )
}

export default Detail