import React from 'react'
import Slider from 'react-slick'
import Film from '../Film'
import styleSlick from './MultipleRowSlick.module.css'
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}
function SamplePrevArrow(props) {
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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  )
}

export default MultipleRowSlick
