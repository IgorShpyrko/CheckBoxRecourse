import { combineReducers } from 'redux';
import CarsReducer from './cars';
import ActiveCar from './car-active';

const rootReducer =  combineReducers({
    cars: CarsReducer,
    active: ActiveCar
})

export default rootReducer