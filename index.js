import { registerRootComponent } from 'expo';

import App from './App';

<meta name="theme-color" content="#1b1b1b" />
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
