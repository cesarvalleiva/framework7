// Import Vue
import { createApp } from 'vue';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';

import firebase from 'firebase/compat/app'
import 'firebase/compat/functions'
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAOlnNTqIt-R9Fcm0qY5p0fBVlbq6l3xws",
  authDomain: "notifwebonesignal.firebaseapp.com",
  databaseURL: "https://notifwebonesignal-default-rtdb.firebaseio.com",
  projectId: "notifwebonesignal",
  storageBucket: "notifwebonesignal.appspot.com",
  messagingSenderId: "753117650654",
  appId: "1:753117650654:web:9f63bec9fed8e83dad2c4f",
  measurementId: "G-FVKDR4MM0N"
};
firebase.initializeApp(firebaseConfig);
// const defaultAnalytics = firebase.analytics();

firebase.functions().useEmulator("localhost", 8080)

const functions = firebase.functions();

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

app.config.globalProperties.$firebase = firebase

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.mount('#app');