import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCFQ3qqPpgsh8DorcT6KROt-p9thHPlJ4o",
  authDomain: "netflix-clone-44edf.firebaseapp.com",
  projectId: "netflix-clone-44edf",
  storageBucket: "netflix-clone-44edf.appspot.com",
  messagingSenderId: "537933516510",
  appId: "1:537933516510:web:3543e1fc2a0a880631bc4f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

//  SignUp Area :-

const signUp = async (name, email, password) => {
    
    try {

        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user 

        await addDoc(collection(db, 'user'), {
            
            uid: user.uid,
            name,
            authProvider: 'local',
            email

        })
        
    } catch (error) {

        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }

}

//  Login Area :-

const login = async (email,password) => {

    try {

        await signInWithEmailAndPassword(auth , email , password)
        
    } catch (error) {

        toast.error(error.code.split('/')[1].split('-').join(' '))
        
    }

}

//  Logout Area :-

const logOut = async () => {

    try {

        signOut(auth)
        
    } catch (error) {

        console.log(error);
        alert(error)
        
    }

}

export {auth , db , signUp , login , logOut}