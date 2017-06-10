import firebase from 'firebase';

  try {
    var config = {
        apiKey: "AIzaSyBgLiXy9bsesk-s2mmnZ77UV2JcO0eDQ2M",
        authDomain: "mytodoapp-d577b.firebaseapp.com",
        databaseURL: "https://mytodoapp-d577b.firebaseio.com",
        projectId: "mytodoapp-d577b",
        storageBucket: "mytodoapp-d577b.appspot.com",
        messagingSenderId: "347624274109"
      };

        firebase.initializeApp(config);
  } catch (e) {

  }

export const firebaseRef = firebase.database().ref();
export default firebase;
