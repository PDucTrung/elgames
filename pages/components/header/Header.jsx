import { AppBar, Box, Container, Grid, Modal } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import React, { useEffect, useState } from "react";
import header from "../header/Header.module.css";
import ModalSignIn from "../modal-signin/ModalSignIn";
import ModalSignUp from "../modal-signup/ModalSignUp";
import Link from "next/link";
import Navigation from "../navigation/Navigation";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../../lib/firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../../../store/feature/auth/auth.slice";
import { selectUserById } from "../../../store/feature/users/users.slice";
import { selectTotalwishlistItem } from "../../../store/feature/wishlist/wishlist.slice";

const Header = () => {
  const [flag, setFlag] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModalSignIn, setOpenModalSignIn] = useState(false);
  const [openModalSignUp, setOpenModalSignUp] = useState(false);
  const [state, setState] = React.useState({
    left: false,
  });
  const totalWishlist = useSelector(selectTotalwishlistItem);

  // auth
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const auth = getAuth(app);

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

  // select language
  const handleChange = (event) => {
    setFlag(event.target.value);
  };

  // modal account
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const scroll = {
    width: "100%",
    overflow: "auto",
    height: "100%",
  };
  // modal sign in
  const handleOpenModalSignIn = () => setOpenModalSignIn(true);
  const handleCloseModalSignIn = () => {
    setOpenModalSignIn(false);
  };

  // modal sign up
  const handleOpenModalSignUp = () => setOpenModalSignUp(true);
  const handleCloseModalSignUp = () => {
    setOpenModalSignUp(false);
  };

  //modal menu mobile
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        backgroundColor: "var(--bg)",
        border: "1px solid var(--gray)",
        height: "100%",
        padding: "25px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            borderBottom: "1px solid var(--gray)",
            padding: "20px 0",
          }}
        >
          <Grid style={{ cursor: "pointer", color: "white" }}>
            <CloseIcon></CloseIcon>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid var(--gray)",
            padding: "20px 0",
          }}
        >
          <Grid>
            <Link className={header["link-icon"]} href={"/favorites/Favorites"}>
              <FavoriteBorderIcon></FavoriteBorderIcon>
              <Grid className={header["number-icon"]}>1</Grid>
            </Link>
          </Grid>
          <Grid>
            <Link className={header["link-icon"]} href={"/cart/Cart"}>
              <LocalMallIcon></LocalMallIcon>
              <Grid className={header["number-icon"]}>1</Grid>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Navigation></Navigation>
    </Box>
  );

  return (
    <div className={header.header}>
      <div className={header["bg-header"]}>
        <div
          className={header["header-top"]}
          sx={{
            width: "100%",
            borderBottom: "1px solid var(--gray-light)",
            padding: 0,
            height: "max-content",
          }}
        >
          <Container maxWidth={"xl"}>
            <Grid display={"flex"} justifyContent={"space-between"}>
              <Grid display={"flex"}>
                <Grid
                  padding={"15px 30px"}
                  borderRight={"1px solid var(--gray-light)"}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      width: "100px",
                      color: "white",
                      height: "30px",
                    },
                    "& .MuiSelect-icon": {
                      color: "white",
                      top: "2px",
                    },
                  }}
                >
                  <Select
                    value={flag}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <Grid display={"flex"} alignItems={"center"}>
                        <img
                          className={header.flag}
                          src="/img/en.png"
                          alt="flag"
                        />
                        <span>EN</span>
                      </Grid>
                    </MenuItem>
                    <MenuItem value={10}>
                      <Grid display={"flex"} alignItems={"center"}>
                        <img
                          className={header.flag}
                          src="/img/vn.png"
                          alt="flag"
                        />
                        <span>VN</span>
                      </Grid>
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid
                  padding={"18px 30px"}
                  borderRight={"1px solid var(--gray-light)"}
                  display={{ xs: "none", lg: "block" }}
                >
                  <a className={header.link} href="#">
                    Help
                  </a>
                </Grid>
                <Grid
                  padding={"18px 30px"}
                  borderRight={"1px solid var(--gray-light)"}
                  display={{ xs: "none", md: "block" }}
                >
                  <Link className={header.link} href={"/games/Games"}>
                    Weekly sale
                  </Link>
                </Grid>
              </Grid>
              <Grid display={"flex"}>
                <Grid
                  padding={"18px 30px"}
                  borderLeft={"1px solid var(--gray-light)"}
                  display={{ xs: "none", md: "block" }}
                >
                  <Link className={header.link} href={"/games/Games"}>
                    Track Order
                  </Link>
                </Grid>
                <Grid
                  padding={"18px 0"}
                  borderLeft={"1px solid var(--gray-light)"}
                >
                  {!auth.currentUser ? (
                    <div>
                      <div
                        id="account-menu"
                        onClick={handleClick}
                        style={{ cursor: "pointer", padding: "0 30px" }}
                      >
                        Account
                      </div>
                      {/* menu account */}
                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="account-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{
                          "& .MuiPopover-paper": {
                            top: "61px !important",
                            width: "123px",
                            borderRadius: "0%",
                            color: "white",
                            background: "var(--bg)",
                            borderLeft: "1px solid var(--gray-light)",
                            borderRight: "1px solid var(--gray-light)",
                          },
                          "& .MuiMenu-list": {
                            padding: 0,
                          },
                          "& .MuiMenuItem-root": {
                            borderBottom: "1.5px solid var(--gray-light)",
                          },
                          "& .MuiMenuItem-root:hover": {
                            background: "white",
                            color: "var(--bg)",
                          },
                        }}
                      >
                        <MenuItem onClick={handleOpenModalSignIn}>
                          <Grid
                            margin={"auto"}
                            fontFamily={"var(--font-default)"}
                          >
                            Sign In
                          </Grid>
                        </MenuItem>
                        <MenuItem onClick={handleOpenModalSignUp}>
                          <Grid
                            margin={"auto"}
                            fontFamily={"var(--font-default)"}
                          >
                            Sign Up
                          </Grid>
                        </MenuItem>
                      </Menu>
                      {/* modal sign in */}
                      <Modal
                        open={openModalSignIn}
                        onClose={handleCloseModalSignIn}
                        sx={scroll}
                      >
                        <Box>
                          <ModalSignIn
                            handleCloseModalSignIn={handleCloseModalSignIn}
                          ></ModalSignIn>
                        </Box>
                      </Modal>
                      {/* modal sign up */}
                      <Modal
                        open={openModalSignUp}
                        onClose={handleCloseModalSignUp}
                        sx={scroll}
                      >
                        <Box>
                          <ModalSignUp
                            handleCloseModalSignUp={handleCloseModalSignUp}
                          ></ModalSignUp>
                        </Box>
                      </Modal>
                    </div>
                  ) : (
                    <div>
                      <div
                        id="account-menu"
                        onClick={handleClick}
                        style={{ cursor: "pointer", padding: "0 30px" }}
                      >
                        {auth.currentUser.displayName == null
                          ? "my account"
                          : auth.currentUser.displayName}
                      </div>
                      {/* menu account */}
                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="account-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{
                          "& .MuiPopover-paper": {
                            top: "61px !important",
                            width: "123px",
                            borderRadius: "0%",
                            color: "white",
                            background: "var(--bg)",
                            borderLeft: "1px solid var(--gray-light)",
                            borderRight: "1px solid var(--gray-light)",
                          },
                          "& .MuiMenu-list": {
                            padding: 0,
                          },
                          "& .MuiMenuItem-root": {
                            borderBottom: "1.5px solid var(--gray-light)",
                          },
                          "& .MuiMenuItem-root:hover": {
                            background: "white",
                            color: "var(--bg)",
                          },
                        }}
                      >
                        <MenuItem>
                          <Grid
                            margin={"auto"}
                            fontFamily={"var(--font-default)"}
                          >
                            Profile
                          </Grid>
                        </MenuItem>
                        <MenuItem>
                          <Grid
                            margin={"auto"}
                            fontFamily={"var(--font-default)"}
                          >
                            Library
                          </Grid>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            href={"/"}
                            style={{
                              width: "100%",
                              textAlign: "center",
                            }}
                            margin={"auto"}
                            fontFamily={"var(--font-default)"}
                            onClick={() => {
                              auth.signOut();
                              setOpenModalSignIn(false);
                            }}
                          >
                            Log out
                          </Link>
                        </MenuItem>
                      </Menu>
                    </div>
                  )}
                </Grid>
                <Grid
                  padding={"15px 30px"}
                  borderLeft={"1px solid var(--gray-light)"}
                  display={{ xs: "none", lg: "block" }}
                >
                  <Link
                    className={header["link-icon"]}
                    href={"/favorites/Favorites"}
                  >
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                    <Grid className={header["number-icon"]}>{totalWishlist}</Grid>
                  </Link>
                </Grid>
                <Grid
                  padding={"15px 30px"}
                  borderLeft={"1px solid var(--gray-light)"}
                  display={{ xs: "none", lg: "block" }}
                >
                  <Link className={header["link-icon"]} href={"/cart/Cart"}>
                    <LocalMallIcon></LocalMallIcon>
                    <Grid className={header["number-icon"]}>1</Grid>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div
          className={header["header-bottom"]}
          sx={{
            width: "100%",
            height: "80px",
          }}
        >
          <Container maxWidth={"xl"}>
            <Grid
              sx={{
                width: "100%",
                padding: "0 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Grid
                sx={{
                  "& img": {
                    width: "80px",
                    verticalAlign: "middle",
                  },
                }}
              >
                <Box display={{ xs: "none", lg: "block" }}>
                  <Link href={"/"}>
                    <img src="/img/logo-am.gif" alt="logo" />
                  </Link>
                </Box>
                <Box
                  display={{ xs: "block", lg: "none" }}
                  height={"80px"}
                  padding={"25px 0"}
                >
                  <MenuIcon
                    onClick={toggleDrawer("left", true)}
                    sx={{
                      fontSize: "30px",
                      cursor: "pointer",
                      ":hover": {
                        color: "var(--blue)",
                      },
                    }}
                  ></MenuIcon>
                  <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    sx={{ display: { lg: "none" } }}
                  >
                    {list("left")}
                  </Drawer>
                </Box>
              </Grid>
              <Grid display={{ xs: "none", lg: "block" }}>
                <Navigation></Navigation>
              </Grid>
              <Grid position={"relative"}>
                <input
                  className={header["ip-search"]}
                  type="text"
                  name="ip-search"
                  id="ip-search"
                  placeholder="Search games"
                />
                <SearchIcon
                  sx={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    color: "white",
                    fontSize: "32px",
                    cursor: "pointer",
                    ":hover": {
                      color: "var(--blue)",
                    },
                  }}
                ></SearchIcon>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
