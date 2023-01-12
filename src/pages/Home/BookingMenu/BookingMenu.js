import React from 'react'
const BookingMenu = () => {

  return (
    <>
      <section className="list-book">
        <div className="warpper-list-book">
          <div className="wrapper-book">
            <div className="btn-group select-width book-movie" role="group">
              <button
                id="book-movie"
                type="button"
                className="btn btn-primary dropdown-toggle selectMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Phim
              </button>
            </div>
            <div className="btn-group select-width book-theater" role="group">
              <button
                id="book-theater"
                type="button"
                className="btn btn-primary dropdown-toggle selectMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rạp
              </button>
            </div>
            <div className="btn-group select-width book-date" role="group">
              <button
                id="book-date"
                type="button"
                className="btn btn-primary dropdown-toggle selectMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ngày xem
              </button>
            </div>
            <div className="btn-group select-width book-screen" role="group">
              <button
                id="book-screen"
                type="button"
                className="btn btn-primary dropdown-toggle selectMenu"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Suất chiếu
              </button>
            </div>
            <div className="btn-group select-width book-button" role="group">
              <button id="book-movie" type="button" className="btn btn-primary">
                MUA VÉ NGAY
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookingMenu
