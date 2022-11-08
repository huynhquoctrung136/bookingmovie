import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/CarouselAction'

const HomeCarousel = (props) => {
  const { arrImg } = useSelector((state) => state.carousel)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCarouselAction())
  }, [])

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div className="carousel-item active">
          <div
            key={`carousel(${index})`}
            style={{
              backgroundImage: `url(${item.hinhAnh})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <img
              style={{ height: '600px' }}
              src={item.hinhAnh}
              className="w-100"
              alt="..."
            />
          </div>
          <div className="movieCarousel__overlay"></div>
        </div>
      )
    })
  }
  return (
    <div id="movieCarousel" className="carousel slide carousel-fade">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#movieCarousel"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">{renderImg()}</div>
    </div>
  )
}

export default HomeCarousel
