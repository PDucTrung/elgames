import React, { useEffect } from "react";
import BackToTop from "./back-to-top/BackToTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { getAuth } from "firebase/auth";
import { app } from "../../lib/firebase";
import LoadAnimation from "./load/LoadAnimation";
import {
  loadProduct,
  selectProductStatus,
} from "../../store/feature/games/games.slice";
import { loadBlogs } from "../../store/feature/blogs/blogs.slice";
import { ToastContainer } from "react-toastify";
import { selectUser, setUser } from "../../store/feature/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";

const Layout = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectProductStatus);
  const user = useSelector(selectUser);
  const auth = getAuth(app);

  useEffect(() => {
    dispatch(loadProduct());
    dispatch(loadBlogs());
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((auth, error) => {
      if (auth && !user) {
        dispatch(
          setUser({
            accessToken: auth.accessToken,
            uid: auth.uid,
            displayName: auth.displayName,
            email: auth.email,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
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
