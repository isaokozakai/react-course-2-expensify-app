import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value')
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

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()     
//       });
//     });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'no',
//   amount: 111,
//   createdAt: 11
// });

// database.ref('notes/-LUT_sTeNmNd6jwxsjIS').remove();

// database.ref('notes').push({
//   titel: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     apoijasdf: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     apoijasdfpoijwe: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e)
// });

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Isao Kozakai',
//   age: 33,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Tokyo',
//     country: 'Japan'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data is removed');
//   })
//   .catch((e) => {
//     console.log('Did not remove data', e);
//   });