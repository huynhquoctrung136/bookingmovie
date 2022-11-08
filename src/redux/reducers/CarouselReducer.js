import { FETCH_CAROUSEL } from '../actions/types/CarouselType'

const initialState = {
  arrImg: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: '/hinhanh/ban-tay-diet-quy.png',
    },
  ],
}

export const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAROUSEL: {
      state.arrImg = action.arrImg
      return { ...state }
    }

    default:
      return state
  }
}
