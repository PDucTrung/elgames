import React from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import favorites from "../favorites/Favorites.module.css";
import Link from "next/link";

const Favorites = () => {
  const game = [
    {
      id: 1,
      name: "Far Cry 6 Standard Edition",
      price: 990000,
      sale: 75,
      img: "/img/game-1.jpg",
      genres: "Open world",
      developer: "Ubisoft Toronto",
      publisher: "Ubisoft",
      os: "Window",
    },
    {
      id: 2,
      name: "Marvel’s Spider-Man: Miles Morales",
      price: 1043100,
      sale: 10,
      genres: "Action",
      developer: "Insomniac Games, Nixxes Software",
      publisher: "PlayStation PC LLC",
      img: "/img/game-2.jpg",
      os: "Window",
    },
    {
      id: 3,
      name: "Gotham Knights",
      price: 990000,
      sale: 50,
      img: "/img/game-3.jpg",
      genres: "Action",
      developer: "Warner Bros. Games Montreal | QLOC",
      publisher: "Warner Bros. Games",
      os: "Window",
    },
  ];

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };
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
            {game.map((item) => (
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
                    src={item.img}
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
                    <strong>{item.name}</strong>
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Genres:
                    </span>{" "}
                    {item.genres}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Developer:
                    </span>{" "}
                    {item.developer}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      Publisher:
                    </span>{" "}
                    {item.publisher}
                  </p>
                  <p>
                    <span
                      style={{
                        color: "var(--gray)",
                      }}
                    >
                      OS:
                    </span>{" "}
                    {item.os}
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
                      <div className={favorites["box-sale"]}>-{item.sale}%</div>
                      <div className={favorites["box-price"]}>
                        <p className={favorites["text-sale"]}>
                          {convertVnd(item.price)} đ
                        </p>
                        <p>
                          {convertVnd((item.price * (100 - item.sale)) / 100)} đ
                        </p>
                      </div>
                      <Link href={"/game-detail/GameDetail"}>
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
                    <button className={favorites["box-remove"]}>Remove</button>
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
