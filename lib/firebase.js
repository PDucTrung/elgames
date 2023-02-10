import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: `${process.env.APP_API_KEY}`,
  authDomain: `${process.env.APP_AUTH_DOMAIN}`,
  projectId: "enlessgame-5fb8d",
  storageBucket: "enlessgame-5fb8d.appspot.com",
  messagingSenderId: "990786164694",
  appId: "1:990786164694:web:d2cf62638f17d7d0717677",
  measurementId: "G-RHYNXWL0MZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
