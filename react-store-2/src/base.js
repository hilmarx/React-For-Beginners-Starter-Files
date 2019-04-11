// Mirror state of Reach to a firebase instance
import Rebase from 're-base'
// Official firebase package
import firebase from 'firebase'

// Creates firebase App
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfcKFEmD42c5pIABmtcBoC-o0dOKc2CHM",
    authDomain: "react-store-tut2.firebaseapp.com",
    databaseURL: "https://react-store-tut2.firebaseio.com"
})

// Create Firebase x Rebase bindings
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }
export default base;