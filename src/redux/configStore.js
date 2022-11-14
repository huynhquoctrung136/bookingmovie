import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'

const rootReducer = combineReducers({
  carousel: CarouselReducer,
  QuanLyPhim: QuanLyPhimReducer,
  QuanLyRap: QuanLyRapReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
