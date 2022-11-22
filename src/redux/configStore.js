import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer'
import { QuanLyDatVeReducer } from './reducers/QuanLyDatVeReducer'
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'

const rootReducer = combineReducers({
  carousel: CarouselReducer,
  QuanLyPhim: QuanLyPhimReducer,
  QuanLyRap: QuanLyRapReducer,
  QuanLyNguoiDung:QuanLyNguoiDungReducer,
  QuanLyDatVe:QuanLyDatVeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
