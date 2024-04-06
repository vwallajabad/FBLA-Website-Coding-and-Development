const firebaseConfig = {
    apiKey: "AIzaSyAIgNXYmAw6fKG7Z3Ixi-dfbS-t2rSFvTc",
    authDomain: "fbla-web.firebaseapp.com",
    databaseURL: "https://fbla-web-default-rtdb.firebaseio.com",
    projectId: "fbla-web",
    storageBucket: "fbla-web.appspot.com",
    messagingSenderId: "248861925431",
    appId: "1:248861925431:web:7c2669d144ae7fcbbd1fb2",
    measurementId: "G-D8T7Z4XSCV"
};
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
