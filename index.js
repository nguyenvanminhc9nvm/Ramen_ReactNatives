/**
 * @format
 */

import React from 'react'; // Remember to import React
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/component/App';
import configStore from './src/redux/reducers/RootReducers';
import { Provider } from 'react-redux';

const AppTest = () => (
    <Provider store={ configStore }>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppTest);
