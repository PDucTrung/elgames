import React, { useEffect, useState } from "react";
import BackToTop from "./back-to-top/BackToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  doc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";

const Layout = (props) => {
  // const db = getFirestore(app);
  // const [games, setGames] = useState([]);

  // useEffect(() => {
  //   const q = query(collection(db, "games"));

  //   getDocs(q)
  //     .then((snapshot) => {
  //       const games = snapshot.docs.map((item) => ({
  //         id: item.id,
  //         ...item.data(),
  //       }));
  //       setGames(games);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   const q = query(collection(db, "games"));

  //   getDocs(q)
  //     .then((snapshot) => {
  //       const games = snapshot.docs.map((item) => ({
  //         id: item.id,
  //         ...item.data(),
  //       }));
  //       const game = games.splice(
  //         games.findIndex((item) => item.id == 50),
  //         1
  //       )[0];
  //       console.log(game);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <div>
      <Header />

      {props.children}

      <Footer games={games} />

      <BackToTop />
    </div>
  );
};

export default Layout;
