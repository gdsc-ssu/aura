import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyBMwzqRRI8JV40M5U0XVj9WL3B2f47Zz0g',
  authDomain: 'gdsc-ssu.firebaseapp.com',
  projectId: 'gdsc-ssu',
  storageBucket: 'gdsc-ssu.appspot.com',
  messagingSenderId: '1025647897879',
  appId: '1:1025647897879:web:1480039c4eb7d9aeca5b52',
  measurementId: 'G-WB9SKLWV4G',
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn('DB offline support not available');
  });
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};
