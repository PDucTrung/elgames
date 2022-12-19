import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import cart from "../cart/Cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";

const Cart = () => {
  // const price = 1234768;
  // console.log(Intl.NumberFormat().format(price).split(".").join(","));

  const cartLsit = [
    {
      id: 1,
      img: "/img/game-1.jpg",
      name: "Far Cry 6 Standard Edition",
      price: 990000,
      platform: "Window",
      quanlity: 1,
    },
    {
      id: 2,
      img: "/img/game-2.jpg",
      name: "Marvel’s Spider-Man: Miles Morales",
      price: 1043000,
      platform: "Window",
      quanlity: 2,
    },
    {
      id: 3,
      img: "/img/game-3.jpg",
      name: "Gotham Knights",
      price: 900000,
      platform: "Window",
      quanlity: 3,
    },
  ];

  const [game, setGame] = useState(cartLsit);

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };

  const increment = (id) => {
    const newCart = [...game];
    const index = newCart.findIndex((item) => item.id == id);
    newCart[index].quanlity += 1;
    setGame(newCart);
  };

  const decrement = (id) => {
    const newCart = [...game];
    const index = newCart.findIndex((item) => item.id == id);
    if (newCart[index].quanlity > 1) {
      newCart[index].quanlity -= 1;
    }
    setGame(newCart);
  };

  const handleDelete = (id) => {
    if (confirm("ban co chac muon xoa")) {
      const newCart = [...game];
      const index = newCart.findIndex((item) => item.id == id);
      newCart.splice(index, 1);
      setGame(newCart);
    }
  };

  const totalSum = () => {
    let total = 0;
    for (let i = 0; i < game.length; i++) {
      total += game[i].quanlity * game[i].price;
    }
    return total;
  };

  if (game.length == 0) {
    return (
      <div className={cart["no-game"]}>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "var(--font-title)",
            }}
          >
            No game in cart
          </p>
        </div>
        <div>
          <Link href={"/games/Games"}>
            <button className="btn">Go to Store</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: " 70px 0",
          backgroundColor: "var(--dark)",
          color: "white",
        }}
      >
        <Grid
          fontFamily={"var(--font-title)"}
          fontSize={{
            xs: "24px",
            sm: "40px",
          }}
          fontWeight="bold"
          color={"white"}
        >
          <p>Cart</p>
        </Grid>
        <Grid
          sx={{
            fontFamily: "var(--font-default)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "500",
            gap: "16px",
          }}
        >
          <Grid color={"var(--gray)"}>Home</Grid>

          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>

          <Grid color={"var(--blue)"}>Cart</Grid>
        </Grid>
      </Box>

      <section className={cart["section-cart"]}>
        <Container>
          <Grid container xs={12}>
            <Grid item={true} xs={12} md={9} padding={2}>
              <div className={cart["box-left"]}>
                <Grid container xs={12} borderBottom={"1px solid var(--gray)"}>
                  {/* head */}
                  <Grid
                    item={true}
                    xs={8}
                    sx={{
                      padding: "20px 0",
                      textAlign: "center",
                      borderRight: "1px solid var(--gray)",
                    }}
                  >
                    <p className={cart.title}>Game</p>
                  </Grid>
                  <Grid
                    item={true}
                    xs={3}
                    sx={{
                      padding: "20px 0",
                      textAlign: "center",
                      borderRight: "1px solid var(--gray)",
                    }}
                  >
                    <p className={cart.title}>Total</p>
                  </Grid>
                  <Grid item={true} xs={1}></Grid>
                </Grid>

                {/* body */}
                {game.map((item) => (
                  <Grid
                    key={item.id}
                    container
                    xs={12}
                    borderBottom={"1px solid var(--gray)"}
                  >
                    <Grid
                      item={true}
                      xs={8}
                      sx={{
                        borderRight: "1px solid var(--gray)",
                      }}
                    >
                      <Grid
                        container
                        xs={12}
                        width={"100%"}
                        height={"100%"}
                        display={"flex"}
                      >
                        <Grid
                          item={true}
                          xs={12}
                          md={8}
                          container
                          borderRight={{ xs: "0", md: "1px solid var(--gray)" }}
                          borderBottom={{
                            xs: "1px solid var(--gray)",
                            md: "0",
                          }}
                          padding={"10px"}
                        >
                          <Grid item={true} xs={12} lg={5}>
                            <Link href={"/game-detail/GameDetail"}>
                              <img
                                src={item.img}
                                alt="img-game-cart"
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                              />
                            </Link>
                          </Grid>
                          <Grid
                            item={true}
                            xs={12}
                            lg={7}
                            padding={{
                              xs: "20px 0 0 0",
                              lg: "0 0 0 20px",
                            }}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            }}
                          >
                            <p>
                              <span className={cart.title}>Name: </span>{" "}
                              <span
                                style={{
                                  color: "var(--gray)",
                                }}
                              >
                                {item.name}
                              </span>
                            </p>
                            <p>
                              <span className={cart.title}>Platform: </span>{" "}
                              <span
                                style={{
                                  color: "var(--gray)",
                                }}
                              >
                                {item.platform}
                              </span>
                            </p>
                            <p>
                              <span className={cart.title}>Price: </span>{" "}
                              <span
                                style={{
                                  color: "var(--blue)",
                                }}
                              >
                                {convertVnd(item.price)} ₫
                              </span>
                            </p>
                          </Grid>
                        </Grid>
                        <Grid
                          item={true}
                          xs={12}
                          md={4}
                          width={"max-content"}
                          padding={"10px"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          gap={"10px"}
                        >
                          <input
                            readOnly
                            type="number"
                            className={cart["input-qty"]}
                            value={item.quanlity}
                          ></input>
                          <div className={cart["box-quanlity"]}>
                            <div
                              className={cart["icon-qty"]}
                              onClick={() => increment(item.id)}
                            >
                              <AddIcon></AddIcon>
                            </div>
                            <div
                              className={cart["icon-qty"]}
                              onClick={() => decrement(item.id)}
                            >
                              <RemoveIcon></RemoveIcon>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      xs={3}
                      item={true}
                      sx={{
                        padding: "20px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRight: "1px solid var(--gray)",
                      }}
                    >
                      <p>
                        {convertVnd(item.price * item.quanlity)} <span>₫</span>
                      </p>
                    </Grid>
                    <Grid
                      xs={1}
                      item={true}
                      sx={{
                        padding: "20px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div onClick={() => handleDelete(item.id)}>
                        <DeleteIcon
                          sx={{
                            ":hover": {
                              color: "var(--blue)",
                            },
                            cursor: "pointer",
                          }}
                        ></DeleteIcon>
                      </div>
                    </Grid>
                  </Grid>
                ))}

                {/* footer */}
                <Grid
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"20px"}
                  display="flex"
                >
                  <div className={cart["box-coupon"]}>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Coupon code"
                        className={cart["input-coupon"]}
                      />
                    </div>
                    <div>
                      <button className="btn">Apply Coupon</button>
                    </div>
                  </div>
                </Grid>
              </div>
            </Grid>
            <Grid item={true} xs={12} md={3} padding={"15px 20px"}>
              <div className={cart["cart-total"]}>
                <p className={cart.title}>Cart total</p>
                <Box
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"16px 0 0 0"}
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <div className={cart.title}>Subtotal : </div>
                  <div
                    style={{
                      color: "var(--blue)",
                    }}
                  >
                    {" "}
                    {totalSum()} ₫
                  </div>
                </Box>
                <Box
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"16px 0 0 0"}
                  display={"flex"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <div className={cart.title}>Total : </div>
                  <div
                    style={{
                      color: "var(--blue)",
                    }}
                  >
                    {" "}
                    {totalSum()} ₫
                  </div>
                </Box>
                <Box
                  width={"100%"}
                  borderTop={"1px solid var(--gray)"}
                  padding={"16px 0 0 0"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Link href={"/checkout/Checkout"}>
                    <button className="btn">Checkout</button>
                  </Link>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Cart;