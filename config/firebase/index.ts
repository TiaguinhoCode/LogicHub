// Exemplo de configuração (firebase.js ou similar)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Se não estiver utilizando Analytics, pode omiti-lo
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRNrP9_94uQGby7PjGliZ2Lvq_YJqTeV8",
  authDomain: "contato-8e3bf.firebaseapp.com",
  projectId: "contato-8e3bf",
  storageBucket: "contato-8e3bf.appspot.com", // Atenção aqui!
  messagingSenderId: "827553719666",
  appId: "1:827553719666:web:208c152b11aa026cc329eb",
  measurementId: "G-6LCJVGQFS5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app); // Se precisar
