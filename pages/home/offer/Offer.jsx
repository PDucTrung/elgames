import { Box, Container, Grid } from "@mui/material";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import offer from "../offer/Offer.module.css";
import Link from "next/link";

const Offer = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            fontFamily: "var(--font-title)",
            fontSize: "36px",
            fontWeight: "700",
            color: "white",
            padding: "50px 0",
          }}
        >
          Special Offers
        </Box>
        <Grid container>
          <Grid
            item={true}
            xs={12}
            md={6}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              ":hover": {
                "& img": {
                  filter: "grayScale(60%)",
                },
              },
            }}
          >
            <Grid
              position={"relative"}
              width="100%"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Grid>
                <img
                  src="/img/bg-img-sale.png"
                  alt="bg-img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
              </Grid>
              <Grid
                sx={{
                  position: "absolute",
                  left: { xs: "0", md: "-20px", lg: "-40px" },
                  bottom: 0,
                }}
              >
                <img
                  src="/img/img-sale.png"
                  alt="bg-img-offer"
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                />
              </Grid>
              <Grid
                width="100%"
                height={"100%"}
                sx={{
                  position: "absolute",
                  zIndex: "3",
                  top: 0,
                  left: 0,
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  flexDirection: "column",
                  paddingBottom: "40px",
                  gap: "30px",
                }}
              >
                <Grid
                  fontSize={"16px"}
                  fontWeight="700"
                  fontFamily={"var(--font-title)"}
                  textTransform="uppercase"
                  display={"flex"}
                  alignItems="center"
                  justifyContent="center"
                  gap={"12px"}
                >
                  <Grid>
                    <HorizontalRuleOutlinedIcon
                      sx={{ fontSize: "36px" }}
                    ></HorizontalRuleOutlinedIcon>
                  </Grid>
                  <Grid>Up to 50% flate</Grid>
                  <Grid>
                    <HorizontalRuleOutlinedIcon
                      sx={{ fontSize: "36px" }}
                    ></HorizontalRuleOutlinedIcon>
                  </Grid>
                </Grid>
                <Grid
                  fontSize={"50px"}
                  fontWeight="700"
                  fontFamily={"var(--font-title)"}
                >
                  Cyber monday sale
                </Grid>
                <Grid>
                  <Link href={"/games/Games"}>
                    <button className="btn">Purchase now</button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item={true}
            xs={12}
            md={6}
            paddingLeft={{ xs: 0, md: "30px" }}
            paddingTop={{ xs: "30px", md: 0 }}
          >
            <Swiper
              className={offer["slider-offer"]}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              slidesPerGroup={1}
              slidesPerView={1}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <Grid container>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-1.jpg"
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
                            Far Cry 6 Standard Edition
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
                                <div>-75%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"990,000 ₫"}
                                </div>
                                <div>{"247,500 ₫"}</div>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-2.jpg"
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
                            {"Marvel’s Spider-Man: Miles Morales"}
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
                                <div>-10%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"1,043,100 ₫"}
                                </div>
                                {"1,159,000 ₫"}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                  <Grid height={"30px"} xs={12} item={true}></Grid>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-3.jpg"
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
                            Gotham Knights
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
                                <div>-50%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"495,000 ₫"}
                                </div>
                                {"990,000 ₫"}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-4.jpg"
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
                            Saints Row
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
                                <div>-30%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"391,300 ₫"}
                                </div>
                                {"559,000 ₫"}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-5.jpg"
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
                            Death Stranding Directors Cut
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
                                <div>-50%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"349,500 ₫"}
                                </div>
                                {"699,000 ₫"}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-6.jpg"
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
                            Dying Light Enhanced Edition
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
                                <div>-40%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"197,400 ₫"}
                                </div>
                                {"329,000 ₫"}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                  <Grid height={"30px"} xs={12} item={true}></Grid>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-7.jpg"
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
                            Dying Light 2 Stay Human
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
                                <div>-70%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"297,000 ₫"}
                                </div>
                                {"990,000 ₫"}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                  <Grid xs={6} item={true}>
                    <Link
                      href={"/game-detail/GameDetail"}
                      style={{ color: "white" }}
                    >
                      <Grid
                        width={"90%"}
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
                          src="/img/game-8.jpg"
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
                            Days Gone
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
                                <div>-80%</div>
                              </Grid>
                              <Grid
                                padding="5px 10px"
                                sx={{
                                  backgroundColor: "var(--dark)",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "12px",
                                    textDecoration: "line-through",
                                    color: "var(--gray)",
                                    textAlign: "center",
                                  }}
                                >
                                  {"227,800 ₫"}
                                </div>
                                {"1,139,000 ₫"}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Offer;
