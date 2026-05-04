import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB5Mq2OtvFNG1pB40IIr2cRGBFf3WL-U48",
  authDomain: "mugs-and-kisses-webapp.firebaseapp.com",
  databaseURL: "https://mugs-and-kisses-webapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mugs-and-kisses-webapp",
  storageBucket: "mugs-and-kisses-webapp.firebasestorage.app",
  messagingSenderId: "150211726047",
  appId: "1:150211726047:web:fbb8ad357c6703856af76a",
  measurementId: "G-5WY09LJQTY"
};

// Initialize Firebase only if it hasn't been initialized already (to prevent Next.js hot-reloading errors)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
