import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from "../features/map/reducer"
import handReducer from '../hand/reducer'
import incomingPosReducer from '../socket/reducer'


const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    hand: handReducer,
    inPos: incomingPosReducer,

})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store