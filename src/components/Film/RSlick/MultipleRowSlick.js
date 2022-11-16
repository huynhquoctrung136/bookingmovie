import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from '../../../redux/actions/types/QuanLyPhimType'
import Film from '../Film'
import styleSlick from './MultipleRowSlick.module.css'
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props

  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block', left: '-50px' }}
      onClick={onClick}
    />
  )
}

const MultipleRowSlick = (props) => {
  const renderFilms = () => {
    return props.arrPhim.map((phim, index) => {
      return (
        <div className={`${styleSlick['width-items']}`} key={index}>
          <Film phim={phim} />
        </div>
      )
    })
  }
  const { dangChieu, sapChieu } = useSelector((state) => state.QuanLyPhim)
  let activePDC = dangChieu === true ? 'active' : ''
  let activePSC = sapChieu === true ? 'active' : ''

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const dispatch = useDispatch()

  return (
    <div>
      <div className="newIn__button mb-3">
        <button
          onClick={() => {
            const action = { type: SET_PHIM_DANG_CHIEU }
            dispatch(action)
          }}
          className={`${activePDC} btn--showing`}
        >
          PHIM ĐANG CHIẾU
        </button>
        <button
          onClick={() => {
            const action = { type: SET_PHIM_SAP_CHIEU }
            dispatch(action)
          }}
          className={`${activePSC} btn--comming`}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  )
}

export default MultipleRowSlick
