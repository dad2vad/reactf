import React from 'react';
import { render } from 'react-dom';

import 'firebase/firestore';
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore
} from 'reactfire';

import './style.css';

/**
 * Add your own Firebase config to watch the burrito status
 * update in real time!
 *
 * Once you add your config, go to the Firestore tab of the
 * Firebase console and create a collection called
 * "tryreactfire", and create a document inside that
 * collection called "burrito" with key "yummy"
 * and value "good" or "bad"
 */
const firebaseConfig = {
  apiKey: "AIzaSyCqwWYWYn7Yf1_lx7SBq3Ns4ZFF9SbTk6Q",
    authDomain: "ll1lll.firebaseapp.com",
    databaseURL: "https://ll1lll-default-rtdb.firebaseio.com",
    projectId: "ll1lll",
    storageBucket: "ll1lll.appspot.com",
    messagingSenderId: "773633719961",
    appId: "1:773633719961:web:1e9008b89e3572035c4208",
    measurementId: "G-7VC6BJ071Y"
};

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore()
    .collection('$')
    .doc('$');

  // subscribe to a document for realtime updates. just one line!
  var v = JSON.stringify(useFirestoreDocData(burritoRef),null,4)



  return <pre>{v}</pre>
}

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
     
      <Burrito />
    </FirebaseAppProvider>
  );
}

render(<App />, document.getElementById('root'));
