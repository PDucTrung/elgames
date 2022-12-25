import React from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import favorites from "../favorites/Favorites.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectWishlist } from "../../store/feature/wishlist/wishlist.slice";
import Swal from "sweetalert2";

const Favorites = () => {
  const { items, removeItem } = useSelector(selectWishlist);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    Swal.fire({
      title: "Do you want to delete ?",
      showDenyButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("OK!", "", "success");
        dispatch(removeItem(productId));
      }
    });
  };

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };

  if (items.length == 0) {
    return (
      <div className={favorites["no-game"]}>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "var(--font-title)",
            }}
          >
            No game in Wishlist
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
          <p>Favorites</p>
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

          <Grid color={"var(--blue)"}>Favorites</Grid>
        </Grid>
      </Box>

      <section className={favorites["section-wishlist"]}>
        <Container>
          <p className={favorites.title}>Wishlist</p>
          <br />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "16px",
              flexDirection: "column",
            }}
          >
            {items.map((item) => (
              <Grid
                key={item.id}
                container
                xs={12}
                width={"100%"}
                sx={{
                  backgroundColor: "var(--dark-2)",
                }}
              >
                <Grid item={true} xs={12} sm={6} md={2} padding={"24px 24px"}>
                  <img
                    src={item.game.img}
                    alt="img-game"
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  item={true}
                  md={5}
                  padding={"24px 24px"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <p>
                    <strong>{item.game.name}</strong>
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Genres:
                    </span>{" "}
                    {item.game.genres}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Developer:
                    </span>{" "}
                    {item.game.developer}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Publisher:
                    </span>{" "}
                    {item.game.publisher}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      OS:
                    </span>{" "}
                    {item.game.system}
                  </p>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  item={true}
                  md={5}
                  padding={"24px 24px"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "16px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <div className={favorites["box-price-wishlist"]}>
                      <div className={favorites["box-sale"]}>
                        -{item.game.sale}%
                      </div>
                      <div className={favorites["box-price"]}>
                        <p className={favorites["text-sale"]}>
                          {convertVnd(item.price)} đ
                        </p>
                        <p>
                          {convertVnd(
                            (item.game.price * (100 - item.game.sale)) / 100
                          )}{" "}
                          đ
                        </p>
                      </div>
                      <Link
                        as={"/game-detail/[gid]"}
                        href={{
                          pathname: "/game-detail/[gid]",
                          query: { gid: item.id },
                        }}
                      >
                        <div className={favorites["box-view"]}>View detail</div>
                      </Link>
                    </div>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <button
                      className={favorites["box-remove"]}
                      onClick={() => handleDelete(item.game.id)}
                    >
                      Remove
                    </button>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Favorites;
