import firebase from "firebase";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: '0fwd3UZ9Kvg488tro5ymrjTpAQ3KGm9WR9BMZy8c',
  authDomain: 'data-random-test.firebaseapp.com',
  databaseURL: 'https://data-random-test-default-rtdb.firebaseio.com'
};

const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();


const chatroomsRef = database.ref("/chatrooms/sala1")
chatroomsRef.on("value", (snapshot)=>{
  const valor = snapshot.val();
  console.log(valor);
});

const messagesRef = database.ref("/messages")
messagesRef.on("value", (snapshot)=>{
  const valor = snapshot.val();
  console.log(valor);
});





//https://firebase.google.com/docs/database/web/start?authuser=0
//https://firebase.google.com/docs/database/web/structure-data?authuser=0
// (...)
export{
  database
}