import rootSaga from './saga';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const configuredStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducer.js', () => {
      configuredStore.replaceReducer(rootReducer);
    });
  }
  sagaMiddleware.run(rootSaga);

  return configuredStore;
};

export default configureStore;
