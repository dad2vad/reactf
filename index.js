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
  apiKey: "AIzaSyBYUTBGRH50qmsADJ5RNo8Jt6LFOyo5hZs",
    authDomain: "iimgbb.firebaseapp.com",
    databaseURL: "https://iimgbb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "iimgbb",
    storageBucket: "iimgbb.appspot.com",
    messagingSenderId: "210074656962",
    appId: "1:210074656962:web:0a4f2f2b28fa4d28759b5b",
    measurementId: "G-3NFG6Q5LYF"
};

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore()
    .collection('L')
    .doc('LL');

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
}

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <h1>🌯</h1>
      <Burrito />
    </FirebaseAppProvider>
  );
}

render(<App />, document.getElementById('root'));
