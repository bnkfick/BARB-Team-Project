
(function () {
    //config firebase app with config and initialize
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA60h7wN-Eq96m7_pW3LTgNvBg4RTaoQ14",
        authDomain: "barb-team.firebaseapp.com",
        databaseURL: "https://barb-team.firebaseio.com",
        projectId: "barb-team",
        storageBucket: "barb-team.appspot.com",
        messagingSenderId: "351673724371"
    };
    firebase.initializeApp(config);


    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');


    //@todo validate username and email
    // Add login event
    btnLogin.addEventListener('click', e => {
        console.log("clicked login button");
        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;

        const auth = firebase.auth();
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })


    // Add login event
    btnSignUp.addEventListener('click', e => {

        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;

        const auth = firebase.auth();
        // Sign In
        auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add logout event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('invisible');
            btnLogout.classList.add('visible');
        } else {
            console.log("Not logged in");
            btnLogout.classList.remove('visible');
            btnLogout.classList.add('invisible');
        }
    });


    //existing user
    //auth.signInWithEmailAndPassword(email, pass);
    //auth.creatUserWithEmailAndPasword(email, pass);
    //return promises that asynchronously 

    //firebaseUser if logged in
    //null if logged out
    //auth.onAuthStateChanged(firebaseUser => { });
}());
