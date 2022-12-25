import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import profile from "../profile/Profile.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { margin } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/feature/auth/auth.slice";
import { getFirestore } from "firebase/firestore";
import { app } from "../../lib/firebase";

const Profile = () => {
  const db = getFirestore(app);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const bill = [
    {
      id: 1,
      date: "12/24/22",
      cart: [
        {
          game: {
            id: 1,
            name: "Rage 2",
            price: 990000,
          },
          quanity: 2,
        },
        {
          game: {
            id: 2,
            name: "Nier automata",
            price: 990000,
          },
          quanity: 5,
        },
      ],
    },

    {
      id: 2,
      date: "12/13/22",
      cart: [
        {
          game: {
            id: 1,
            name: "Rage 2",
            price: 990000,
          },
          quanity: 2,
        },
        {
          game: {
            id: 2,
            name: "haahah",
            price: 990000,
          },
          quanity: 3,
        },
      ],
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
          <p>Profile</p>
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
          <Grid color={"var(--gray)"}>My Account</Grid>

          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>

          <Grid color={"var(--blue)"}>Profile</Grid>
        </Grid>
      </Box>

      <section className={profile["section-profile"]}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p className={profile.title}>My profile</p>
            <form
              action=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <div className="form-control">
                <p>Email:</p>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input"
                  value={user == null ? "" : user.email}
                  readOnly
                />
              </div>
              <div className="form-control">
                <p>User ID:</p>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input"
                  value={user == null ? "" : user.uid}
                  readOnly
                />
              </div>
            </form>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p className={profile.title}>Purchase history </p>

            <Box
              textAlign={"center"}
              width={"100%"}
              border={"1px solid var(--gray)"}
            >
              <Grid container>
                <Grid item={true} padding={"10px"} xs={3}>
                  Date
                </Grid>
                <Grid item={true} padding={"10px"} xs={6}>
                  Game
                </Grid>
                <Grid item={true} padding={"10px"} xs={3}>
                  Total
                </Grid>
              </Grid>

              {bill.map((item) => (
                <Grid
                  key={item.id}
                  container
                  sx={{
                    borderTop: "1px solid var(--gray)",
                  }}
                >
                  <Grid
                    item={true}
                    padding={"10px"}
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.date}
                  </Grid>
                  <Grid item={true} padding={"10px"} xs={6}>
                    {item.cart.map((item) => (
                      <Box key={item}>
                        <strong>{item.game.name}</strong> x{" "}
                        <span
                          style={{
                            color: "var(--blue)",
                          }}
                        >
                          {item.quanity}
                        </span>
                      </Box>
                    ))}
                  </Grid>
                  <Grid
                    item={true}
                    padding={"10px"}
                    xs={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {"totalPrice"}
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Profile;
