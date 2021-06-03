import * as firebase from 'firebase/app'

import 'firebase/firebase-auth'

const firebaseConfig = {
    apiKey: "AIzaSyBnENmUWTeCadOMEY8iQRsd0BCQ5cdsNEs",
    authDomain: "sotsugyoseisaku-8a79c.firebaseapp.com",
    projectId: "sotsugyoseisaku-8a79c",
    storageBucket: "sotsugyoseisaku-8a79c.appspot.com",
    messagingSenderId: "924077079411",
    appId: "1:924077079411:web:2622f62d8c3c707278a306"
}

firebase.default.initializeApp(firebaseConfig)

export default firebase