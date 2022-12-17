import React, { useEffect, useState } from "react";
import BackToTop from "./back-to-top/BackToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { collection, getFirestore, getDocs, query } from "firebase/firestore";
import { app } from "../../lib/firebase";

const Layout = (props) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const q = query(collection(getFirestore(app), "games"));

    getDocs(q)
      .then((snapshot) => {
        const games = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setGames(games);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
