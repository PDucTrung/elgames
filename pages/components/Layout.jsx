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
import { loadBlogs } from "../../store/feature/blogs/blogs.slice";
import { loadUsers } from "../../store/feature/users/users.slice";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectProductStatus);

  useEffect(() => {
    dispatch(loadProduct());
    dispatch(loadBlogs());
    dispatch(loadUsers());
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
          <ToastContainer />
        </div>
      )}
    </main>
  );
};

export default Layout;
