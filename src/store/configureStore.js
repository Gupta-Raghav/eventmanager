import {createStore ,combineReducers,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import eventsReducer from '../Reducers/events';
import filetrsReducer from '../Reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            events : eventsReducer,
            filters : filetrsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
}