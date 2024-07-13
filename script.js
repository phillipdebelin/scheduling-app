// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpz1YebvGDgbYDOafhSkQUXyPbNwDcDpA",
    authDomain: "ndis-contractor-app.firebaseapp.com",
    databaseURL: "https://ndis-contractor-app-default-rtdb.firebaseio.com",
    projectId: "ndis-contractor-app",
    storageBucket: "ndis-contractor-app.appspot.com",
    messagingSenderId: "748941573611",
    appId: "1:748941573611:web:9a8d75afab9206d5efedae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        events: []
    });
    calendar.render();

    // Authentication
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const logoutBtn = document.getElementById('logout-btn');
    const authSection = document.getElementById('auth-section');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error.message));
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        auth.createUserWithEmailAndPassword(email, password).catch(error => alert(error.message));
    })
