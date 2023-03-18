import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBImTs7bU0w4cW43vxSkBIdYg5rf5aZxn8",
  authDomain: "comision-abb4b.firebaseapp.com",
  projectId: "comision-abb4b",
  storageBucket: "comision-abb4b.appspot.com",
  messagingSenderId: "75976433628",
  appId: "1:75976433628:web:ff363992228e5ef389f919"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
