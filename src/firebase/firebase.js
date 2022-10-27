import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:1034820492366:web:f06395930a0755dd8bb71f",
    measurementId: "G-WTKSN06NF4"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
  
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });



// Setup "expenses" with three items (description, note, amount, createdAt)

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
//   });
  
// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
// });
  
// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// });
  
  
  
// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();
  
// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val =snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//   name: 'Maryana Hassan',
//   age: 28,
//   stressLevel: 6,
//   job: {
//     title: 'Software depeloper',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'koura',
//     country: 'Lebanon'
//   }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This is failed', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': ' Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is updated!');
// }).catch((e) => {
//     console.log('Didnt updated', e)
// });

// database.ref().remove().then(() => {
//         console.log('Data was removed.');
//       }).catch((e) => {
//         console.log('Didnt remove data', e);
// });

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 73,
//     weight: 150
//   }).then(() => {
//     console.log('Second set call worked.');
//   }).catch((e) => {
//     console.log('Things didnt for the second error', e);
//   });

