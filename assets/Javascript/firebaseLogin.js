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

    var database = firebase.database();

    //=================================================================//
    //  Clicking on a favorite Mountain Icon
    //  Will add/remove the associated mountain to the user favorites
    //=================================================================//
    $("#master-table").on("click", ".favorite", function () {
        var mtnid = $(this).attr("id");
        const auth = firebase.auth();
        var currentUserId = auth.currentUser.uid;

        if ($(this).attr("value") === "false") {
            $(this).removeClass("far").addClass("fas").attr("value", "true");

            console.log("ADDING FAVE ID: " + $(this).attr("id"));

            database.ref("mtns").push({
                name: mtnid,
                userid: currentUserId
            });

        } else {

            $(this).removeClass("fas").addClass("far").attr("value", "false");

            console.log("REMOVING FAVE ID: " + $(this).attr("id"));

            database.ref('mtns').orderByChild("name").equalTo(mtnid).once('value', function (snapshot) {
                //snapshot would have list of NODES that satisfies the condition
                //console.log(snapshot.val())
                snapshot.forEach(function (childSnapshot) {

                    //easier to remove the entire childSnapshot i.e. record
                    childSnapshot.ref.remove();
                });
            });
        }
    });

    

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
        promise.catch(e => {
            console.log(e.message);
            $(".errorDiv").text(e.message);
        });
    })


    // Add signup event
    btnSignUp.addEventListener('click', e => {

        //Get email and password
        const email = txtEmail.value;
        const pass = txtPassword.value;

        const auth = firebase.auth();
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    // Add logout event
    btnLogout.addEventListener('click', e => {
        firebase.auth().signOut();
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        console.log("FirebaseUser" + firebaseUser)
        if (firebaseUser) {
            //user is logged in
            console.log(firebaseUser.uid);
            btnSignUp.classList.remove('visible');
            btnSignUp.classList.add('invisible');
            btnLogin.classList.remove('visible');
            btnLogin.classList.add('invisible');
            btnLogout.classList.remove('invisible');
            btnLogout.classList.add('visible');


            database.ref('mtns').orderByChild("userid").equalTo(firebaseUser.uid).once('value', function (snapshot) {
                //snapshot would have list of NODES that satisfies the condition
                //console.log(snapshot.val())
                snapshot.forEach(function (childSnapshot) {
                    var favMtnIcons = $(".favorite");
                    console.log(childSnapshot);
                    //this will be the Object Key Unique Id Value 
                    var key = childSnapshot.key;
                    //this is the data
                    var childData = childSnapshot.val();
                    //console.log("KEY: " + key);
                    console.log(childData.name);
                    for (var i = 0; i < favMtnIcons.length; i++ ) {
                        var mtnId = $(favMtnIcons[i]).attr("id");
                        if ( mtnId === childData.name ) {
                            $(favMtnIcons[i]).removeClass("far").addClass("fas").attr("value", "true")
                        }
                    }
                });
            });

        } else {
            //No user is signed in
            console.log("Not logged in");
            btnLogin.classList.remove('invisible');
            btnLogin.classList.add('visible');
            btnLogout.classList.remove('visible');
            btnLogout.classList.add('invisible');
        }
    });

    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         // User is signed in.
    //     } else {
    //         // No user is signed in.
    //     }
    // });

    //existing user
    //auth.signInWithEmailAndPassword(email, pass);
    //auth.creatUserWithEmailAndPasword(email, pass);
    //return promises that asynchronously 

    //firebaseUser if logged in
    //null if logged out
    //auth.onAuthStateChanged(firebaseUser => { });
}());