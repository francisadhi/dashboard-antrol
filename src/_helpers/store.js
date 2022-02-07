import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../_reducers'

const loggerMiddleware = createLogger()
const middeware = applyMiddleware(thunkMiddleware, loggerMiddleware)

// export default store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
export default createStore(rootReducer, middeware)
