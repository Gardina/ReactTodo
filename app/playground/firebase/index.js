import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBgLiXy9bsesk-s2mmnZ77UV2JcO0eDQ2M",
    authDomain: "mytodoapp-d577b.firebaseapp.com",
    databaseURL: "https://mytodoapp-d577b.firebaseio.com",
    projectId: "mytodoapp-d577b",
    storageBucket: "mytodoapp-d577b.appspot.com",
    messagingSenderId: "347624274109"
  };
  firebase.initializeApp(config);
  const firebaseRef = firebase.database().ref();

  firebaseRef.set({
    App : {
      name: 'todo',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Kolyan',
      age: 123
    }
  }).then((value) => {
    console.log('ok sir')
  }, (e) => {
    console.log('we got problem cap')
  })

// firebaseRef.update({
//   isRunning: false,
//   'App/name': 'todo application'
// });
//
// firebaseRef.child('App').update({
//   version: '1.0.1'
// }).then((value) => {
//   console.log('ok sir')
// }, (e) => {
//   console.log('we got problem cap')
// })

// firebaseRef.update({
//   'App/name': 'todo appppp',
//   'user/name': 'хуй'
// });
//
// firebaseRef.child('App').update({
//   name: 'ohuenni'
// });
//
// firebaseRef.child('user').update({
//   name: 'hui'
// })
//
// firebaseRef.update({isRunning: null});
// firebaseRef.child('user/age').remove();
//
// firebaseRef.once('value').then((snapshot) => {
//   console.log('we are cool cap', snapshot.val())
// }, (e) => {
//   console.log('we are fucked cap')
// })
//
// firebaseRef.on('value', (snapshot) => {
//   console.log('got value', snapshot.val());
// })
//
// firebaseRef.update({
//   'App/name': 'todo appppp',
//   'user/name': 'хуй'
// });

// firebaseRef.child('user').on('value', (snapshot)=> {
//   console.log('ok ', snapshot.val())
// });
//
// let notesRef = firebaseRef.child('notes');
//
// firebaseRef.child('user').update({name: 'pizda'});
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('id is', snapshot.key, snapshot.val() )
// })
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('id is', snapshot.key, snapshot.val() )
// })
// notesRef.on('child_changed', (snapshot) => {
//   console.log('id is', snapshot.key, snapshot.val() )
// })
//
// var newNoteRef = notesRef.push({
//   text: 'walk the duck'
// })
