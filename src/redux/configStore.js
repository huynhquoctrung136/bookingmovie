import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'

const rootReducer = combineReducers({
  carousel: CarouselReducer,
  QuanLyPhim: QuanLyPhimReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
