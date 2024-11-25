// Creacion del archivo firebase, configuración e inicialización de Firebase en un 
//proyecto web utilizando Firebase Firestore para realizar operaciones CRUD

// Importa las funciones necesarias desde los SDK requeridos en este apartado van las credenciales
// correspondientes de tu proyecto.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

// TODO: Agregar los SDK de productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Estan funciones definidas en la biblioteca oficial de Firebase para JavaScript
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyAsjUGMEGCoWEAXRx0B9hQf5ENW5qrGCwE",
  authDomain: "practica1-37e8d.firebaseapp.com",
  projectId: "practica1-37e8d",
  storageBucket: "practica1-37e8d.firebasestorage.app",
  messagingSenderId: "417888778363",
  appId: "1:417888778363:web:ee4a1270bddfdaae370ade"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

// Las definiciones de las funciones permanecen igual
export const saveTask = (title, description) =>
  addDoc(collection(db, "tareas"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tareas"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tareas", id));

export const getTask = (id) => getDoc(doc(db, "tareas", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tareas", id), newFields);

export const getTasks = () => getDocs(collection(db, "tareas"));