// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqvYMsTh9rJfaDA9_iJf5EyXQfNACXo7E",
    authDomain: "gratified-click.firebaseapp.com",
    projectId: "gratified-click",
    storageBucket: "gratified-click.appspot.com",
    messagingSenderId: "175744665258",
    appId: "1:175744665258:web:932e921f04216a65af32d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app