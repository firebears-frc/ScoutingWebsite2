// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM21jdRY5pd5kFK5TAe0QO1AOu-QVuxKs",
  authDomain: "firebearss.firebaseapp.com",
  projectId: "firebearss",
  storageBucket: "firebearss.appspot.com",
  messagingSenderId: "347330491543",
  appId: "1:347330491543:web:e5efeace61d79359fee5d2",
  measurementId: "G-L8EJKK3MSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const home = collection(db, "scouts");

export async function addData(jsonData){
    try {
        const docRef = await addDoc(home,jsonData);
      
        console.log("Document written with ID: ", docRef.id);
        location.reload();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function getData(){
  const q = query(collection(db, "scouts"));
  const querySnapshot = await getDocs(q);
  const docs = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    docs.push(doc.data());
  });
  //console.log(docs);
  return docs;
}