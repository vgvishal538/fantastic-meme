/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, StatusBar } from 'react-native';
import Main from './src/Main';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import store from "./src/store/configureStore"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

enableScreens();

const App = () => (
    <Provider store={store}>
        <StatusBar
            backgroundColor={Colors.light}
            barStyle="dark-content"
        />

        <GestureHandlerRootView style={{ flex: 1 }}>
            <Main />
        </GestureHandlerRootView>
    </Provider>
);

AppRegistry.registerComponent(appName, () => App);
