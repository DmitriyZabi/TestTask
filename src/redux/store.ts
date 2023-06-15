import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { IPostsState } from './posts/models'
import { rootSaga } from './rootSaga'
import { ICommentsState } from './comments/models'

export interface IStore {
  posts: IPostsState
  comments: ICommentsState
}

const sagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = (preloadedState: IStore) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

const store = configureStore({} as IStore)

sagaMiddleware.run(rootSaga)

export default store
