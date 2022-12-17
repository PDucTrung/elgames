import React from "react";
import { Container, Grid, Box, Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blog from "../blog/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const blogList = [
    {
      id: 1,
      name: "Simple Guidance For You In CyberPunk 2077",
      content:
        "Set spirit. Beginning. Created great. Dominion deep fourth. Divide bearing Midst very god rule fill.",
      date: " January 7, 2022 ",
      img: "/img/blog-1.jpg",
    },
    {
      id: 2,
      name: "Final Fantasy XVI is said to be a more “mature” take on the fantasy RPG franchise",
      content: "Dominion deep fourth. Divide bearing Midst very god rule fill.",
      date: "  May 10, 2022  ",
      img: "/img/blog-2.jpg",
    },
    {
      id: 3,
      name: "Never Underestimate The Influence Of Gaming",
      content: "Likeness beast were have gathering you’re.",
      date: "  April 7, 2022  ",
      img: "/img/blog-3.jpg",
    },
    {
      id: 4,
      name: "GTA 5 on PS5 and Xbox Series: Everything you need to know about the next-gen version",
      content: "One bring to very us our. Darkness made i waters.",
      date: "  April 7, 2022  ",
      img: "/img/blog-4.jpg",
    },
    {
      id: 5,
      name: "What It’s Like Gaming",
      content:
        "Seed you’ll were made two herb Day fifth give over dominion you.",
      date: "  April 7, 2022  ",
      img: "/img/blog-5.jpg",
    },
    {
      id: 6,
      name: "What Will Gaming Be Like In The Next 50 Years?",
      content:
        "So night were One whose fourth face replenish from upon doesn’t dry herb you’ll heaven the and great. Their was. Their face signs without midst beast void second. ",
      date: "  March 21, 2022  ",
      img: "/img/blog-6.jpg",
    },
  ];
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
          <p>Blog</p>
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

          <Grid color={"var(--blue)"}>Blog</Grid>
        </Grid>
      </Box>

      <section className={blog["section-blog-list"]}>
        <Container>
          <Box className={blog["blog-list"]}>
            <Grid container xs={12}>
              {blogList.map((item) => (
                <Grid
                  key={item.id}
                  xs={12}
                  sm={6}
                  md={4}
                  item={true}
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                  padding="20px 0"
                >
                  <Box className={blog["blog-card"]}>
                    <Link
                      href={"/blog-detail/BlogDetail"}
                      style={{
                        color: "var(--bg)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt="sdsad"
                        style={{
                          maxWidth: "100%",
                          verticalAlign: "middle",
                          transition: "all 0.2s linear",
                        }}
                      />
                      <div className={blog.content}>
                        <div className={blog.title}>{item.name}</div>
                        <div className={blog.p}>{item.content}</div>
                        <div className={blog.date}>{item.date}</div>
                      </div>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className={blog.pagigation}>
            <Pagination
              sx={{
                "& .MuiPaginationItem-page": {
                  color: "white",
                  border: "2px solid white",
                },
                "& .MuiPaginationItem-page:hover": {
                  backgroundColor: "var(--blue)",
                },
                "& .MuiPaginationItem-page.Mui-selected": {
                  backgroundColor: "var(--gray)",
                },
                "& .MuiPaginationItem-icon": {
                  color: "white",
                },
                "& .MuiPaginationItem-previousNext": {
                  border: "2px solid white",
                },
                "& .MuiPaginationItem-previousNext:hover": {
                  backgroundColor: "var(--blue)",
                },
                "& .MuiPaginationItem-ellipsis": {
                  color: "white",
                },
              }}
              count={10}
              size="large"
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            ></Pagination>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
