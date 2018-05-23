import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfVLZRtHbb8xztPL37tKTsIMZXRu4tO_k",
    authDomain: "comment-system-devjs.firebaseapp.com",
    databaseURL: "https://comment-system-devjs.firebaseio.com",
    projectId: "comment-system-devjs",
    storageBucket: "comment-system-devjs.appspot.com",
    messagingSenderId: "474250973922"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base