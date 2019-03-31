import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../containers/rootReducer';

// import rootSaga from 'src/sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
        applyMiddleware(
            createLogger(),
            // sagaMiddleware,
        ),
);

// sagaMiddleware.run(rootSaga);

