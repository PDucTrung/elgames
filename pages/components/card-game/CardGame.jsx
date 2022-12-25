import React, { useState } from "react";
import { toast } from "react-toastify";
import card from "../card-game/CardGame.module.css";
import { Box, Container, Grid } from "@mui/material";
import Link from "next/link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  selectWishlist,
} from "../../../store/feature/wishlist/wishlist.slice";
import { selectUser } from "../../../store/feature/auth/auth.slice";
import { addCart } from "../../../store/feature/cart/cart.slice";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const CardGame = ({ item }) => {
  const user = useSelector(selectUser);
  const [isActive, setIsActive] = React.useState(false);
  const { items, removeItem } = useSelector(selectWishlist);
  // const newId = Date.now().toString().slice(-5);

  const dispatch = useDispatch();
  const handleClickaddToWishlist = () => {
    dispatch(addItem({ productId: item.id }));
  };

  // add cart
  const Msg = () => (
    <span
      style={{
        color: "var(--bg)",
      }}
    >
      {"Add " + item.name + " to cart successful!"}
    </span>
  );
  const handleClickaddToCart = () => {
    if (user !== null) {
      dispatch(addCart({ productId: item.id, quantity: 1 }));
      toast(<Msg></Msg>);
    } else {
      toast.warning("You need to login to perform this function", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };
  return (
    <Grid
      xs={6}
      lg={4}
      item={true}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 0",
      }}
    >
      <Grid
        width={"92%"}
        margin={"auto"}
        position={"relative"}
        sx={{
          ":hover": {
            "& img": {
              opacity: 0.6,
            },
            "& .MuiListItemIcon-root": {
              opacity: 1,
            },
          },
          cursor: "pointer",
          fontFamily: "var(--font-default)",
        }}
      >
        <img
          src={item.img}
          alt="img-offer"
          style={{ maxWidth: "100%", verticalAlign: "middle" }}
        />
        <Grid
          width={"100%"}
          position="absolute"
          left={0}
          bottom={0}
          display={"flex"}
        >
          <Grid
            sx={{
              backgroundColor: "gray",
              width: "100%",
              padding: "10px",
            }}
          >
            <div className={card.name}>{item.name}</div>
            <Grid container marginTop={"5px"}>
              <Grid
                padding="5px"
                sx={{
                  backgroundColor: "green",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  display={{
                    xs: "none",
                    sm: "block",
                  }}
                >
                  -{item.sale}%
                </Box>
              </Grid>
              <Grid
                padding="5px 10px"
                sx={{
                  backgroundColor: "var(--dark)",
                }}
              >
                <Box
                  sx={{
                    fontSize: "12px",
                    textDecoration: "line-through",
                    color: "var(--gray)",
                    textAlign: "center",
                  }}
                  display={{
                    xs: "none",
                    sm: "block",
                  }}
                >
                  {convertVnd(item.price)} ₫
                </Box>
                <Box
                  fontSize={{
                    xs: "12px",
                    sm: "16px",
                  }}
                >
                  {convertVnd((item.price * (100 - item.sale)) / 100)} ₫
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ListItemIcon
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 3,
            transform: "translate(-50%,-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "8px", sm: "16px" },
            opacity: "0",
            ":hover": {
              "& .MuiBox-root": {
                opacity: 1,
              },
            },
          }}
        >
          <Box
            sx={{
              opacity: 0,
            }}
          >
            <Box
              width={{ xs: "32px", sm: "50px" }}
              height={{ xs: "32px", sm: "50px" }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "white",
                opacity: 0,
                ":hover": {
                  backgroundColor: "var(--blue)",
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                },
              }}
              onClick={handleClickaddToCart}
            >
              <ShoppingCartIcon
                sx={{
                  color: "var(--bg)",
                }}
              ></ShoppingCartIcon>
            </Box>
          </Box>

          <Box
            sx={{
              opacity: 0,
              transition: "0.3s ease-in-out",
            }}
          >
            <Box
              width={{ xs: "32px", sm: "50px" }}
              height={{ xs: "32px", sm: "50px" }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: isActive ? "var(--red)" : "white",
                ":hover": {
                  backgroundColor: isActive ? "var(--red)" : "var(--blue)",
                  "& .MuiSvgIcon-root": {
                    color: isActive ? "white" : "white",
                  },
                },
              }}
              onClick={() => {
                if (user !== null) {
                  const list = items.filter((i) => i.id == item.id);
                  if (list.length > 0) {
                    setIsActive(false);
                    dispatch(removeItem(item.id));
                    const Msg = () => (
                      <span
                        style={{
                          color: "var(--bg)",
                          fontFamily: "var(--font-default)",
                        }}
                      >
                        <ErrorOutlineIcon
                          sx={{
                            color: "var(--red)",
                          }}
                        ></ErrorOutlineIcon>{" "}
                        {"Delete " + item.name + " to wishlist successful!"}
                      </span>
                    );
                    toast(<Msg></Msg>);
                  } else {
                    setIsActive(true);
                    handleClickaddToWishlist();
                    const Msg = () => (
                      <span
                        style={{
                          color: "var(--bg)",
                          fontFamily: "var(--font-default)",
                        }}
                      >
                        <CheckCircleOutlineIcon
                          sx={{
                            color: "var(--green)",
                          }}
                        ></CheckCircleOutlineIcon>{" "}
                        {"Add" + item.name + " to wishlist successful!"}
                      </span>
                    );
                    toast(<Msg></Msg>);
                  }
                } else {
                  toast.warning("You need to login to perform this function", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
              }}
            >
              <FavoriteIcon
                sx={{
                  color: isActive ? "white" : "var(--bg)",
                }}
              ></FavoriteIcon>
            </Box>
          </Box>
          <Box
            sx={{
              opacity: 0,
              transition: "0.6s ease-in-out",
            }}
          >
            <Link
              as={"/game-detail/[gid]"}
              href={{
                pathname: "/game-detail/[gid]",
                query: { gid: item.id },
              }}
            >
              <Box
                width={{ xs: "32px", sm: "50px" }}
                height={{ xs: "32px", sm: "50px" }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  ":hover": {
                    backgroundColor: "var(--blue)",
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <RemoveRedEyeIcon
                  sx={{
                    color: "var(--bg)",
                  }}
                ></RemoveRedEyeIcon>
              </Box>
            </Link>
          </Box>
        </ListItemIcon>
      </Grid>
    </Grid>
  );
};

export default CardGame;
