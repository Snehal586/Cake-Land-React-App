import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBYqXBNPY-R3-g0t3ln1NlRkp_Vl19Teew",
  authDomain: "cakeland-0.firebaseapp.com",
  projectId: "cakeland-0",
  storageBucket: "cakeland-0.appspot.com",
  messagingSenderId: "687679341886",
  appId: "1:687679341886:web:4a4f901a77e38007ad586f",
  measurementId: "G-W19SYRC5Z7"
};

firebase.initializeApp(firebaseConfig);



//Storing user data in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
   
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//Function for adding another collection in Database if we want
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


//Converting our snapshot into a perfect data for showing in  shop data
export const convertCollectionsSnapshotToMap = collections => {
  // [{ title item},{},{}]
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  // [] [] [] = []
    return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};




//Store Order data in All Transaction Collection 
export const AllTransactionData =async (DataObject) => {

  const userRef = firestore.collection('all_transaction');
  try {
    await userRef.add({
      username : DataObject.card.name,
      email:DataObject.email,
      method:DataObject.card.object,
      price:`${DataObject.price}₹`,
      items:DataObject.cartItems,
      address:DataObject.card.address_line1,
      city:DataObject.card.address_city,
      zipcode:DataObject.card.address_zip,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (error) {
    console.log('error adding Data to firebase', error.message);
  }


}

//Creating function for storing order data in users data
export const UserOrder = (DataObject) => {
  var user = firebase.auth().currentUser;
  const userid = user.uid;
  const userRef = firestore.collection('users').doc(userid).collection('Orders');
  try{
    userRef.add({
      username : DataObject.card.name,
        email:DataObject.email,
        method:DataObject.card.object,
        price:`${DataObject.price}₹`,
        items:DataObject.cartItems,
        address:DataObject.card.address_line1,
        city:DataObject.card.address_city,
        zipcode:DataObject.card.address_zip,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
  }catch(error){
    console.log('error adding Data to firebase', error.message);
  }


}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



