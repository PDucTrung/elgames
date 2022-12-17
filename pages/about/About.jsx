import React from "react";
import { Container, Grid } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import about from "../about/About.module.css";
import AllGame from "./all-games/AllGame";
import People from "./people/People";
import Feature from "./feature/Feature";
import Count from "./Count/Count";

const About = () => {
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
          <p>About</p>
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

          <Grid color={"var(--blue)"}>About</Grid>
        </Grid>
      </Box>

      <section className={about["seciton-all-games"]}>
        <AllGame></AllGame>
      </section>

      <section className={about["section-feature"]}>
        <Feature></Feature>
      </section>

      <section className={about["section-count"]}>
        <Count></Count>
      </section>

      <section className={about["section-people"]}>
        <People></People>
      </section>
    </div>
  );
};

export default About;
