import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "../game-detail/GameDetail.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import Link from "next/link";
import Similar from "./similar/Similar";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShareIcon from "@mui/icons-material/Share";
import FlagIcon from "@mui/icons-material/Flag";

const GameDetail = () => {
  const [qty, setQty] = useState(1);
  const game = {
    id: 15,
    name: "God of War",
    rate: "4.9",
    genres: "Open world",
    developer: "Santa Monica Studio",
    publisher: "PlayStation PC LLC",
    release_date: "01/14/22",
    price: 1139000,
    sale: 40,
    img: "/img/game15/game.jpg",
    img_header: "/img/game15/header.jpg",
    screen_shoot: [
      {
        id_img: 151,
        img: "/img/game15/screen-shoot-1.jpg",
      },
      {
        id_img: 152,
        img: "/img/game15/screen-shoot-2.jpg",
      },
      {
        id_img: 153,
        img: "/img/game15/screen-shoot-3.jpg",
      },
      {
        id_img: 154,
        img: "/img/game15/screen-shoot-4.jpg",
      },
      {
        id_img: 155,
        img: "/img/game15/screen-shoot-5.jpg",
      },
    ],
    os: "Window",
    minimum_system: {
      os: "Windows 10 64-bit",
      processor:
        "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
      memory: "8 GB DDR",
      storage: "70 GB HDD (SSD Recommended)",
      direct: "DirectX 11 (feature level 11_1)",
      graphics: "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
    },
    recommend_system: {
      os: "Windows 10 64-bit",
      processor:
        "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
      memory: "8 GB DDR",
      storage: "70 GB HDD",
      direct: "DirectX 11 (feature level 11_1)",
      graphics: "NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)",
    },
    language_sp:
      "English, Dutch, French, German, Italian, Japanese, Korean, Polish, Portuguese, Portuguese - Brazil, Russian, Spanish - Spain, Spanish - Latin America, Turkish, Chinese - Traditional, Hungarian, Czech, Greek",
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.\nKratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.\nFrom the marble and columns of ornate Olympus to the gritty forests, mountains and caves of pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters and gods.\nWith an over the shoulder camera that brings the player closer to the action than ever before, fights in God of War™ mirror the pantheon of Norse creatures Kratos will face: grand, gritty and grueling. A new main weapon and new abilities retain the defining spirit of the God of War series while presenting a vision of conflict that forges new ground in the genre.",
  };

  const [img, setImg] = useState(game.screen_shoot[0].img);
  const changeImg = (e) => {
    setImg(e.target.src);
    document.querySelector(".big-img").src = img;
  };

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
          <p>{game.name}</p>
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
          <Grid color={"var(--gray)"}>Store</Grid>

          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>

          <Grid color={"var(--blue)"}>{game.name}</Grid>
        </Grid>
      </Box>

      <section className={styles["section-gamedetail"]}>
        <Container>
          <p
            className={styles.title}
            style={{
              marginLeft: "16px",
            }}
          >
            {game.name}
          </p>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon>
            </Grid>
            <Grid
              sx={{
                padding: "2px 8px",
                backgroundColor: "var(--blue)",
              }}
            >
              {game.rate}
            </Grid>
          </Grid>
          <Grid container xs={12}>
            {/* left */}
            <Grid
              item={true}
              xs={12}
              lg={8}
              padding={"16px 0"}
              order={{
                xs: 1,
                lg: 0,
              }}
            >
              <section className={styles["container-left"]}>
                <img
                  className="big-img"
                  src={img}
                  alt="img-game-detal"
                  style={{
                    maxWidth: "100%",
                    verticalAlign: "middle",
                    marginBottom: "16px",
                  }}
                />

                {/* slider */}
                <Box
                  sx={{
                    "& .swiper-slide": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    "& .btn-next, & .btn-prev": {
                      cursor: "pointer",
                      width: "40px",
                      height: "40px",
                      border: "2px solid var(--gray)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    "& .btn-next:hover, & .btn-prev:hover": {
                      color: "white",
                      backgroundColor: "var(--blue)",
                      border: "2px solid var(--blue)",
                    },
                  }}
                >
                  <Swiper
                    className={styles["slider-img"]}
                    loop={true}
                    slidesPerView="auto"
                    centerInsufficientSlides={true}
                    spaceBetween={16}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      600: {
                        slidesPerView: 3,
                      },
                      900: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 5,
                      },
                    }}
                    autoplay={{
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: ".btn-next",
                      prevEl: ".btn-prev",
                      clickable: true,
                    }}
                    modules={[Navigation, Autoplay]}
                  >
                    {game.screen_shoot.map((item) => (
                      <SwiperSlide key={item.id_img}>
                        <Grid width={"100%"}>
                          <Grid
                            width={"100%"}
                            margin={"auto"}
                            position={"relative"}
                            sx={{
                              ":hover": {
                                "& img": {
                                  opacity: 0.6,
                                },
                              },
                              cursor: "pointer",
                            }}
                          >
                            <img
                              src={item.img}
                              alt="img-shoot"
                              style={{
                                maxWidth: "100%",
                                verticalAlign: "middle",
                              }}
                              onClick={(e) => changeImg(e)}
                            />
                          </Grid>
                        </Grid>
                      </SwiperSlide>
                    ))}

                    <div className={styles.control}>
                      <div className="btn-next">
                        <WestRoundedIcon></WestRoundedIcon>
                      </div>
                      <div className="btn-prev">
                        <EastRoundedIcon></EastRoundedIcon>
                      </div>
                    </div>
                  </Swiper>
                </Box>

                <div className={styles["box-description"]}>
                  <p>
                    <strong>{game.name}</strong>
                  </p>
                  <br />
                  <p>{game.description}</p>
                </div>

                <div className={styles["box-system"]}>
                  <p>
                    <strong>SYSTEM REQUIREMENTS</strong>
                  </p>
                  <br />
                  <Grid
                    container
                    xs={12}
                    paddingTop={2}
                    borderTop={"1px solid var(--gray)"}
                  >
                    <Grid item={true} xs={6} fontSize={"15px"}>
                      <div className={styles["box-req"]}>
                        <p
                          style={{
                            fontFamily: "var(--font-title)",
                          }}
                        >
                          MINIMUM:
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            OS:{" "}
                          </span>{" "}
                          {game.minimum_system.os}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Processor:{" "}
                          </span>{" "}
                          {game.minimum_system.processor}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Memory:{" "}
                          </span>{" "}
                          {game.minimum_system.memory}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Storage:{" "}
                          </span>{" "}
                          {game.minimum_system.storage}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Direct X:{" "}
                          </span>
                          {"   "}
                          {game.minimum_system.direct}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Graphics:{" "}
                          </span>{" "}
                          {game.minimum_system.graphics}
                        </p>
                      </div>
                    </Grid>
                    <Grid item={true} xs={6} fontSize={"15px"}>
                      <div className={styles["box-req"]}>
                        <p
                          style={{
                            fontFamily: "var(--font-title)",
                          }}
                        >
                          RECOMMENDED:
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            OS:{" "}
                          </span>{" "}
                          {game.recommend_system.os}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Processor:{" "}
                          </span>{" "}
                          {game.recommend_system.processor}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Memory:{" "}
                          </span>{" "}
                          {game.recommend_system.memory}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Storage:{" "}
                          </span>{" "}
                          {game.recommend_system.storage}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Direct X:{" "}
                          </span>
                          {"   "}
                          {game.recommend_system.direct}
                        </p>

                        <p>
                          <span
                            style={{
                              color: "var(--gray)",
                            }}
                          >
                            Graphics:{" "}
                          </span>{" "}
                          {game.recommend_system.graphics}
                        </p>
                      </div>
                    </Grid>

                    <p>
                      <span
                        style={{
                          color: "var(--gray)",
                          fontSize: "15px",
                        }}
                      >
                        Languages Supported:{" "}
                      </span>{" "}
                      {game.language_sp}
                    </p>
                  </Grid>
                </div>
              </section>
            </Grid>

            {/* rigt */}
            <Grid
              item={true}
              xs={12}
              lg={4}
              padding={2}
              order={{
                xs: 0,
                lg: 1,
              }}
            >
              <section className={styles["container-right"]}>
                <img
                  src={game.img_header}
                  alt="img-header"
                  style={{
                    maxWidth: "100%",
                    verticalAlign: "middle",
                  }}
                />
                <div className={styles["box-price"]}>
                  <div className={styles["box-sale"]}>-{game.sale}%</div>
                  <div
                    style={{
                      color: "gray",
                      textDecoration: "line-through",
                    }}
                  >
                    {convertVnd(game.price)} đ
                  </div>
                  <div>
                    {convertVnd((game.price * (100 - game.sale)) / 100)} đ
                  </div>
                </div>

                <p>Sale ends 1/5/2023 at 11:00 PM</p>
                <br />
                <Grid container xs={12}>
                  <Grid
                    item={true}
                    xs={4}
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    <input
                      readOnly
                      type="number"
                      className={styles["input-qty"]}
                      value={qty}
                    ></input>
                    <div className={styles["box-quanlity"]}>
                      <div
                        className={styles["icon-qty"]}
                        onClick={() => {
                          setQty(qty + 1);
                        }}
                      >
                        <AddIcon></AddIcon>
                      </div>
                      <div
                        className={styles["icon-qty"]}
                        onClick={() => {
                          if (qty > 1) {
                            setQty(qty - 1);
                          }
                        }}
                      >
                        <RemoveIcon></RemoveIcon>
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item={true}
                    xs={8}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <button className={styles["btn-add-list"]}>
                      Add to Whishlist
                    </button>
                  </Grid>
                </Grid>
                <br />
                <button className={styles["btn-add"]}>Add to cart</button>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Genres
                  </div>
                  <div>{game.genres}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Developer
                  </div>
                  <div>{game.developer}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Publisher
                  </div>
                  <div>{game.publisher}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Release Date
                  </div>
                  <div>{game.release_date}</div>
                </div>
                <div className={styles["box-developer"]}>
                  <div
                    style={{
                      color: "var(--gray)",
                    }}
                  >
                    Platform
                  </div>
                  <div>{game.os}</div>
                </div>
                <div className={styles["container-box-share"]}>
                  <button className={styles["box-share"]}>
                    <ShareIcon></ShareIcon> Share
                  </button>
                  <button className={styles["box-share"]}>
                    <FlagIcon></FlagIcon> Repost
                  </button>
                </div>
              </section>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={styles["section-slider-similar"]}>
        <p className={styles.title}>MORE LIKE THIS</p>
        <Similar></Similar>
      </section>
    </div>
  );
};

export default GameDetail;
