import React from 'react';
import { Provider } from 'react-redux';
import Tabs from './containers/Tabs'
import 'antd/dist/antd.css'


import store from './store';

const App = () => (
    <Provider store={store}>
    <Tabs/>
    </Provider>
);

export default App;

