import { combineReducers } from 'redux';
import WeatherReducer from './weather';
import DefaultLocations from './default_locations';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  locations: DefaultLocations
});

export default rootReducer;
