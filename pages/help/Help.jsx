import * as React from "react";
import help from "../help/Help.module.css";
import {
  Box,
  Container,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Help = () => {
  const [isActive, setIsActive] = React.useState(false);
  const data = [
    {
      id: 1,
      title: "Purchases",
      content: [
        {
          p: "I can't complete my purchase on the Steam Store",
        },
        {
          p: "I need help with a Gift Card or Wallet Code",
        },
        {
          p: "I have charges from Steam that I didn't make",
        },
        {
          p: "View complete purchasing history",
        },
      ],
    },
    {
      id: 2,
      title: "My Games, Software, etc.",
      content: [
        {
          p: "Counter-Strike: Global Offensive",
        },
        {
          p: "Dota 2",
        },
        {
          p: "PUBG: BATTLEGROUNDS",
        },
        {
          p: "Grand Theft Auto V",
        },
      ],
    },
    {
      id: 3,
      title: "Endless games Winter Sale and Rewards",
      content: [
        {
          p: "Help with Purchase Issues",
        },
        {
          p: "Help with Gifting",
        },
        {
          p: "View your Winter Sale badge progress",
        },
      ],
    },
    {
      id: 4,
      title: "My Account",
      content: [
        {
          p: "Manage Account Details (email, phone, payment, country)",
        },
        {
          p: "Phone Number",
        },
        {
          p: "My account is stolen or hijacked",
        },
        {
          p: "Help me sign in to my account",
        },
        {
          p: "Data Related to Your elgames Account",
        },
      ],
    },
    {
      id: 5,
      title: "Endless games Client",
      content: [
        {
          p: "Endless games Client Crashes",
        },
        {
          p: "Endless games Can't Contact Login Servers",
        },
        {
          p: "Endless games Cloud",
        },
        {
          p: "Endless games Gift Card or Wallet Code",
        },
      ],
    },
    {
      id: 6,
      title: "I have charges from elgames that I didn't make",
      content: [
        {
          p: "I have a elgames account",
        },
        {
          p: "I am not a elgames user",
        },
        {
          p: "I have a different payment issue",
        },
      ],
    },
  ];
  const handleToggle = (e) => {
    setIsActive(!isActive);
    isActive
      ? (e.currentTarget.parentNode.parentElement.lastElementChild.style.display =
          "none")
      : (e.currentTarget.parentNode.parentElement.lastElementChild.style.display =
          "block");
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
          <p>Help</p>
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

          <Grid color={"var(--blue)"}>Help</Grid>
        </Grid>
      </Box>

      <section className={help["section-help"]}>
        <Container>
          <p className={help.title}>Help</p>
          <br />
          <br />
          <Box
            sx={{
              backgroundColor: "var(--dark-2)",
              padding: "20px 20px 40px 20px",
            }}
          >
            {data.map((item) => (
              <Box
                key={item.id}
                sx={{
                  padding: "20px 10px 20px 15px",
                  borderBottom: "1px solid var(--gray)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-title)",
                      fontWeight: "700",
                      fontSize: "18px",
                    }}
                  >
                    {item.title}
                  </p>
                  <KeyboardArrowDownIcon onClick={(e) => handleToggle(e)} />
                </Box>
                <Box
                  display={"none"}
                  sx={{
                    marginTop: "16px",
                    color: "var(--gray)",
                    paddingLeft: "20px",
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {item.content.map((i) => (
                      <li key={i}>{i.p}</li>
                    ))}
                  </ul>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Help;
