import { combineReducers,createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer';

const rootReducer = combineReducers({
    carousel:CarouselReducer,
})

export const store=createStore(rootReducer,applyMiddleware(thunk));





