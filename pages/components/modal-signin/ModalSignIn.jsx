import React from "react";
import { Box, Grid, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../modal-signin/ModalSignIn.module.css";
import { useForm } from "react-hook-form";

const ModalSignIn = ({ handleCloseModalSignIn }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (e) => console.log(e);
  return (
    <Box className={styles["form-sign-in"]}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Grid style={{ cursor: "pointer" }} onClick={handleCloseModalSignIn}>
          <CloseIcon></CloseIcon>
        </Grid>
      </Box>
      <Box className={styles.content}>
        <h2 className={styles.h2}>SIGN IN</h2>
        <br />
        <Grid className={styles.p} textAlign={"center"}>
          Please login below account detail
        </Grid>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <input
              className={styles.input}
              type="text"
              name="email"
              id="email-in"
              placeholder="Email"
              {...register("emailSignin", {
                required: "Please enter this field!",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "This field must be email!",
                },
              })}
            />
            {errors.emailSignin && (
              <div className={styles["form-message"]}>
                {errors.emailSignin.message}
              </div>
            )}
          </Grid>
          <Grid>
            <input
              className={styles.input}
              type="password"
              name="pass"
              id="pass-in"
              placeholder="Password"
              {...register("passwordSignin", {
                required: "Please enter this field!",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                  message:
                    "Password must consist of at least 8 letters and contain at least one uppercase letter, one lowercase letter and one number.",
                },
              })}
            />
            {errors.passwordSignin && (
              <div className={styles["form-message"]}>
                {errors.passwordSignin.message}
              </div>
            )}
          </Grid>
          <button className={styles.button}>Sign In</button>
        </form>

        <Grid mt={"16px"}>
          <Link href="#" sx={{ textDecoration: "none", color: "var(--gray)" }}>
            Forgot your password?
          </Link>
        </Grid>

        <Grid mt={"32px"}>
          <h4 className={styles.h2}>{"Don't have an account?"}</h4>
          <Grid
            sx={{
              textAlign: "center",
              color: "var(--gray)",
              marginTop: "8px",
            }}
          >
            <Link
              href="#"
              sx={{ textDecoration: "none", color: "var(--gray)" }}
            >
              Create account
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Grid textAlign={"center"}>OR</Grid>
      <Grid
        sx={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <GoogleIcon className={styles.icon}></GoogleIcon>
        <FacebookIcon className={styles.icon}></FacebookIcon>
      </Grid>
    </Box>
  );
};

export default ModalSignIn;
