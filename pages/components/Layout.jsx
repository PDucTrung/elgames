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
import { useDispatch, useSelector } from "react-redux";

import LoadAnimation from "./load/LoadAnimation";
import {
  loadProduct,
  selectProductStatus,
} from "../../store/feature/games/games.slice";

const Layout = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectProductStatus);

  useEffect(() => {
    dispatch(loadProduct());
  }, []);

  return (
    <main>
      {loading ? (
        <div>
          <LoadAnimation></LoadAnimation>
        </div>
      ) : (
        <div>
          <Header />

          {props.children}

          <Footer />

          <BackToTop />
        </div>
      )}
    </main>
  );
};

export default Layout;
