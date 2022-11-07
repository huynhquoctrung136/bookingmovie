import React from 'react'
import slide1 from './hero-1.jpg'
import slide2 from './hero-2.jpg'
import slide3 from './hero-3.jpg'
const HomeCarousel = () => {
  return (
    <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
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
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="movieCarousel__caption">
              <p className="movieType">ACTION, ADVENTURE, FANTASY</p>
              <h2 className="movieName">End of the World: Part I</h2>
              <p className="movieDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="movieCarousel__button">
              <button className="button button--trailer">
                <i className="fa fa-play"></i>
                XEM TRAILER
              </button>
              <button className="button button--booking">MUA VÉ</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="movieCarousel__caption">
              <p className="movieType">ACTION, ADVENTURE, FANTASY</p>
              <h2 className="movieName">End of the World: Part I</h2>
              <p className="movieDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="movieCarousel__button">
              <button className="button button--trailer">
                <i className="fa fa-play"></i>
                XEM TRAILER
              </button>
              <button className="button button--booking">MUA VÉ</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div className="movieCarousel__caption">
              <p className="movieType">ACTION, ADVENTURE, FANTASY</p>
              <h2 className="movieName">End of the World: Part I</h2>
              <p className="movieDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="movieCarousel__button">
              <button className="button button--trailer">
                <i className="fa fa-play"></i>
                XEM TRAILER
              </button>
              <button className="button button--booking">MUA VÉ</button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default HomeCarousel
