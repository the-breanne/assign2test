import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'YOUR API KEY',
  authDomain: 'subscriptions-YOURS!',
   projectId: 'YOURS',
  storageBucket: 'YOURS',
  messagingSenderId: 'YOURS',
  appId: 'YOURS'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
