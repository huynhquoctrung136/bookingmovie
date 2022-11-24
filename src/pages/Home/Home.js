import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/Film/RSlick/MultipleRowSlick'
import { layDanhSachPhim } from '../../redux/actions/QuanLyPhimAction'
import { layDanhSachCumRap } from '../../redux/actions/QuanLyRapAction'
import HomeCarousel from '../../templates/HomeTemplates/Layout/HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'
const Home = (props) => {
  const { arrPhim } = useSelector((state) => state.QuanLyPhim)
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRap)

  console.log('heThongRapChieu', heThongRapChieu)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(layDanhSachPhim())
    dispatch(layDanhSachCumRap())
  }, [])
  return (
    <>
      <HomeCarousel />
      <div className="newIn section">
        <div className="container">
          <h2 className="newIn__title">Showing Movie</h2>
          <div className="newIn__content">
            <MultipleRowSlick arrPhim={arrPhim} />
          </div>
        </div>
      </div>

      <div className="showTime section">
        <div className="container">
          <h2 className="showTime__title">ShowTime</h2>
          <div className="showTime__content">
            <HomeMenu heThongRapChieu={heThongRapChieu} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
