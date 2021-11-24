
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCos6CubHFT__XspL557LJpGiX7DhsIowg",
      authDomain: "quitter-ac481.firebaseapp.com",
      projectId: "quitter-ac481",
      storageBucket: "quitter-ac481.appspot.com",
      messagingSenderId: "387191825366",
      appId: "1:387191825366:web:53bf5825397aa910507a77"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
