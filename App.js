import React from "react"
import RootNavigation from "./src/navigation/rootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import firebase from "firebase/compat/app";
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCASWWZF71ub84zmAGbCyrzB2S_vtnTtSI",
  authDomain: "mobilyamaster-4579d.firebaseapp.com",
  projectId: "mobilyamaster-4579d",
  storageBucket: "mobilyamaster-4579d.appspot.com",
  messagingSenderId: "579129272648",
  appId: "1:579129272648:web:3c8e570a048b7910256b7d",
  measurementId: "G-B7MHVWFE7E"
};

firebase.initializeApp(firebaseConfig);

const App = () => {

  return( 
    <Provider store = {store}>
      <RootNavigation/>
    </Provider>
    )
}

export default App;
