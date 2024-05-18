import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCASWWZF71ub84zmAGbCyrzB2S_vtnTtSI",
  authDomain: "mobilyamaster-4579d.firebaseapp.com",
  projectId: "mobilyamaster-4579d",
  storageBucket: "mobilyamaster-4579d.appspot.com",
  messagingSenderId: "579129272648",
  appId: "1:579129272648:web:3c8e570a048b7910256b7d",
  measurementId: "G-B7MHVWFE7E"
};

const app = initializeApp(firebaseConfig);

// Firebase Auth'u React Native AsyncStorage kullanarak başlatın
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const firestore = getFirestore(app);

export { auth, firestore };
