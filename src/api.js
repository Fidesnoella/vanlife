import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAkAIbHq0YWSbVFAoULnWvvc_UJANliTWg",
  authDomain: "vanlife-cec47.firebaseapp.com",
  projectId: "vanlife-cec47",
  storageBucket: "vanlife-cec47.appspot.com",
  messagingSenderId: "487866325321",
  appId: "1:487866325321:web:9479347ee30763b5ca6298",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const docSnap = await getDoc(docRef);
  return {
    ...docSnap.data(),
    id: docSnap.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
