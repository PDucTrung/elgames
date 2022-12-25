import { Container, Box, Grid, FormControlLabel } from "@mui/material";
import React from "react";
import checkout from "../checkout/Checkout.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useForm } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/feature/cart/cart.slice";

const Checkout = () => {
  const { items, totalPrice } = useSelector(selectCart);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (e) => console.log(e);

  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };

  if (items.length == 0) {
    return (
      <div className={checkout["no-game"]}>
        <div>
          <p
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "var(--font-title)",
            }}
          >
            No game {":("}
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
          <p>Checkout</p>
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
          <Grid color={"var(--gray)"}>Cart</Grid>

          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>

          <Grid color={"var(--blue)"}>Checkout</Grid>
        </Grid>
      </Box>

      <section className={checkout["section-checkout"]}>
        <Container>
          <Grid container xs={12} width={"100%"}>
            <Grid
              item={true}
              xs={12}
              lg={6}
              padding={"16px"}
              order={{
                xs: 1,
                lg: 0,
              }}
            >
              <div className={checkout["box-left"]}>
                <p className={checkout.title}>Billing details</p>
                <br />
                <form
                  action=""
                  className="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="box-form">
                    <div className="form-control">
                      <p>First name</p>
                      <input
                        type="text"
                        className="input"
                        name="firstname"
                        placeholder="First name"
                        {...register("fname", { required: true })}
                      />
                      {errors.fname && (
                        <div className="form-message">
                          This field is required
                        </div>
                      )}
                    </div>

                    <div className="form-control">
                      <p>Last name</p>
                      <input
                        type="text"
                        className="input"
                        name="lastname"
                        placeholder="Last name"
                        {...register("lname", { required: true })}
                      />
                      {errors.lname && (
                        <div className="form-message">
                          This field is required
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-control">
                    <p>{"Town / City"}</p>
                    <input
                      type="text"
                      className="input"
                      name="city"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                    {errors.city && (
                      <div className="form-message">This field is required</div>
                    )}
                  </div>

                  <div className="form-control">
                    <p>ZIP Code</p>
                    <input
                      type="text"
                      className="input"
                      name="zipcode"
                      placeholder="ZIP Code"
                      {...register("zipcode", {
                        required: "Please enter this field!",
                        pattern: {
                          value: /^\d{5}(?:[-\s]\d{4})?$/,
                          message: "This field must be zip code",
                        },
                      })}
                    />
                    {errors.zipcode && (
                      <div className="form-message">
                        {errors.zipcode.message}
                      </div>
                    )}
                  </div>

                  <div className="form-control">
                    <p>Phone</p>
                    <input
                      type="text"
                      className="input"
                      name="phone"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Please enter this field!",
                        pattern: {
                          value:
                            /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                          message: "This field must be phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <div className="form-message">{errors.phone.message}</div>
                    )}
                  </div>

                  <div className="form-control">
                    <p>Email address</p>
                    <input
                      type="text"
                      className="input"
                      name="email"
                      placeholder="Email address"
                      {...register("email", {
                        required: "Please enter this field!",
                        pattern: {
                          value:
                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                          message: "This field must be email!",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="form-message">{errors.email.message}</div>
                    )}
                  </div>

                  <Box
                    display={"flex"}
                    gap={"16px"}
                    padding={"10px"}
                    border={"1px solid var(--gray)"}
                    flexDirection={"column"}
                    width={"100%"}
                  >
                    <div className="form-control">
                      <p>Visa/MasterCard number</p>
                      <input
                        type="text"
                        className="input"
                        name="visa"
                        placeholder="Visa/MasterCard"
                        {...register("visanumber", {
                          required: "Please enter this field!",
                          pattern: {
                            value:
                              /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                            message: "This field must be visa number!",
                          },
                        })}
                      />
                      {errors.visanumber && (
                        <div className="form-message">
                          {errors.visanumber.message}
                        </div>
                      )}
                    </div>

                    <div className="box-form">
                      <div className="form-control">
                        <p>Month</p>
                        <input
                          type="text"
                          className="input"
                          name="firstname"
                          placeholder="Month"
                          {...register("month", {
                            required: "Please enter this field!",
                            pattern: {
                              value: /^(0?[1-9]|1[012])$/,
                              message: "This field must be month!",
                            },
                          })}
                        />
                        {errors.month && (
                          <div className="form-message">
                            {errors.month.message}
                          </div>
                        )}
                      </div>

                      <div className="form-control">
                        <p>Years</p>
                        <input
                          type="text"
                          className="input"
                          name="lastname"
                          placeholder="Years"
                          {...register("year", {
                            required: "Please enter this field!",
                            pattern: {
                              value: /^\d{4}$/,
                              message: "This field must be month!",
                            },
                          })}
                        />
                        {errors.year && (
                          <div className="form-message">
                            {errors.year.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </Box>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 28 },
                            color: "var(--blue)",
                          }}
                          {...register("check", { required: true })}
                        />
                      }
                      label="I have read and agree to the website terms and conditions."
                    />
                    {errors.check && (
                      <div className="form-message">
                        you do not agree to our terms
                      </div>
                    )}
                  </div>
                  <button
                    className="btn"
                    style={{
                      width: "100%",
                    }}
                  >
                    Payment
                  </button>
                </form>
              </div>
            </Grid>
            <Grid
              item={true}
              xs={12}
              lg={6}
              padding={"16px"}
              order={{
                xs: 0,
                lg: 1,
              }}
            >
              <div className={checkout["box-right"]}>
                <p className={checkout.title}>Your order</p>
                <br />
                <div className={checkout["box-order"]}>
                  <div className={checkout["card-order"]}>
                    <Grid container xs={12}>
                      <Grid
                        item={true}
                        xs={8}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                        }}
                      >
                        <strong>Product</strong>
                      </Grid>
                      <Grid
                        item={true}
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px",
                        }}
                      >
                        <strong>Subtotal</strong>
                      </Grid>
                    </Grid>
                  </div>

                  {/* card */}
                  {items.map((item) => (
                    <div className={checkout["card-order"]} key={item.id}>
                      <Grid container xs={12}>
                        <Grid
                          item={true}
                          xs={8}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px",
                          }}
                        >
                          <img
                            src={item.product.img}
                            alt="img-game"
                            style={{
                              maxWidth: "40%",
                              verticalAlign: "midddle",
                            }}
                          />

                          <p>
                            {item.product.name}{" "}
                            <strong
                              style={{
                                color: "var(--blue)",
                              }}
                            >
                              x {item.quantity}
                            </strong>
                          </p>
                        </Grid>
                        <Grid
                          item={true}
                          xs={4}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "12px",
                          }}
                        >
                          {convertVnd(item.quantity * item.product.price)} đ
                        </Grid>
                      </Grid>
                    </div>
                  ))}

                  <div className={checkout["card-order"]}>
                    <Grid container xs={12}>
                      <Grid
                        item={true}
                        xs={8}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                        }}
                      >
                        <strong>SUBTOTAL</strong>
                      </Grid>
                      <Grid
                        item={true}
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px",
                        }}
                      >
                        <strong>{convertVnd(totalPrice)} đ</strong>
                      </Grid>
                    </Grid>
                  </div>

                  <div className={checkout["card-order"]}>
                    <Grid container xs={12}>
                      <Grid
                        item={true}
                        xs={8}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                        }}
                      >
                        <strong>TOTAL</strong>
                      </Grid>
                      <Grid
                        item={true}
                        xs={4}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "12px",
                        }}
                      >
                        <strong>{convertVnd(totalPrice)} đ</strong>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
