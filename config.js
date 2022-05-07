import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfZPxnnkOziCJ1EEqRnUu2eBuHNOA8zhU",
  authDomain: "school-attendance-5d7d2.firebaseapp.com",
  projectId: "school-attendance-5d7d2",
  storageBucket: "school-attendance-5d7d2.appspot.com",
  messagingSenderId: "639570114203",
  appId: "1:639570114203:web:a5f4935653e8554d25f83e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();