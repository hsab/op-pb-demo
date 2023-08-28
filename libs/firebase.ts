import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCz530Yi39AFB1kDjuaOXyIkA-mkxRspx0',
  authDomain: 'oneproject-demo.firebaseapp.com',
  projectId: 'oneproject-demo',
  storageBucket: 'oneproject-demo.appspot.com',
  messagingSenderId: '751978221448',
  appId: '1:751978221448:web:e946919e4f0817804db43d',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
