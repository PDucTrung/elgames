import React from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import blogdetal from "../blog-detail/BlogDetail.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";

const BlogDetail = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (e) => console.log(e);
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
          display="flex"
          justifyContent={"center"}
        >
          <p className="title">Simple Guidance For You In CyberPunk 2077</p>
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
          <Grid color={"var(--gray)"}>Blog</Grid>

          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>

          <Grid color={"var(--blue)"}>
            <span className="title">
              Simple Guidance For You In CyberPunk 2077
            </span>
          </Grid>
        </Grid>
      </Box>
      <section className={blogdetal["section-blog-detail"]}>
        <Container>
          <Grid container xs={12}>
            <Grid item={true} xs={12} lg={8}>
              <div className={blogdetal["box-left"]}>
                <Box
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    fontFamily: "var(--font-title)",
                  }}
                >
                  Simple Guidance For You In CyberPunk 2077
                </Box>
                <Box>
                  <div className={blogdetal["box-user"]}>
                    <img src="/img/user-1.jpg" alt="user" />
                    <div>Joker</div>
                  </div>
                  <div className={blogdetal.date}>January 7, 2022</div>
                </Box>
                <Box padding={"32px 0"}>
                  <img
                    src="/img/bg-blog-1.jpg"
                    alt=""
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div className={blogdetal.title}>
                    Set spirit. Beginning. Created great. Dominion deep fourth.
                    Divide bearing Midst very god rule fill.
                  </div>
                  <p>
                    Likeness beast were have gathering you’re. Seed you’ll were
                    made two herb Day fifth give over dominion you. So night
                    were One whose fourth face replenish from upon doesn’t dry
                    herb you’ll heaven the and great. Their was. Their face
                    signs without midst beast void second. Brought creepeth
                    creeping form days without. Face had. Earth us god to every
                    also likeness that dominion after first give one moving open
                    blessed them beast. Form. Spirit be image thing good called
                    make and behold upon of herb also set above. Good shall
                    place together sixth their morning which likeness. Fourth
                    dry dominion to above day creeping was without creeping
                    creepeth. Two firmament. Good. Fish created. Forth also
                    place. Morning, days. Earth morning.
                  </p>
                  <p>
                    Blessed thing fowl him. Was can’t fruit winged night female,
                    air moving moved made place two own seasons every created
                    saw tree so called god void in heaven. Gathered multiply
                    fish. Fruitful and. Fruitful land air. Waters divided. Us.
                    Given sixth, place. Of you’ll blessed from sixth likeness
                    stars. He cattle you’re The lesser beginning male i divided
                    brought above. Isn’t. Beast without fourth.
                  </p>
                  <p>
                    The also said, second signs under doesn’t of. Rule, i stars.
                    Male. First air, subdue fowl. Of you’ll image blessed their
                    saw form can’t heaven him is whose. Years he firmament
                    lesser hath lesser let two. Deep green man. Third herb void
                    you’re gathering which let also rule. One you’re.
                  </p>
                  <p>
                    Living heaven itself them were. One bring to very us our.
                    Darkness made i waters. Great stars creeping light which
                    beast third earth good also living greater days air yielding
                    given given Called a bring second that third said greater
                    night let fruitful midst itself void you there air winged
                    brought. Set spirit. Beginning. Created great. Dominion deep
                    fourth. Divide bearing Midst very god rule fill.
                  </p>
                </Box>
                <Box
                  marginTop={"36px"}
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <p className={blogdetal.title}>Leave a Reply </p>

                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <form
                    action=""
                    className="form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="box-form">
                      <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          className="input"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <div className="form-message">
                            This field is required
                          </div>
                        )}
                      </div>
                      <div className="form-control">
                        <p>Email</p>
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="input"
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
                          <div className="form-message">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-control-2">
                      <p>Comment</p>
                      <textarea
                        placeholder="Your comment"
                        name=""
                        id=""
                        cols="30"
                        rows="15"
                        style={{
                          border: "1px solid var(--gray)",
                          backgroundColor: "var(--dark)",
                          color: "var(--gray)",
                          fontFamily: "var(--font-default)",
                          fontSize: "16px",
                          padding: "12px 30px",
                        }}
                      ></textarea>
                    </div>
                    <button className="btn">Post comment</button>
                  </form>
                </Box>
              </div>
            </Grid>
            <Grid item={true} xs={12} lg={4}>
              <div className={blogdetal["box-right"]}>
                <section className={blogdetal["recent-posts"]}>
                  <p className={blogdetal.title}>Recent posts</p>
                  <Link href={"#"}>
                    <div className="box-form">
                      <img
                        src="/img/blog-2.jpg"
                        alt="img-blog-post"
                        style={{
                          maxWidth: "50%",
                          verticalAlign: "middle",
                        }}
                      />
                      <div className="form-control">
                        <div className={blogdetal["title-re-post"]}>
                          Final Fantasy XVI is said to be a more “mature” take
                          on the fantasy RPG franchise
                        </div>
                        <div className={blogdetal.date}> May 10, 2022 </div>
                      </div>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-form">
                      <img
                        src="/img/blog-3.jpg"
                        alt="img-blog-post"
                        style={{
                          maxWidth: "50%",
                          verticalAlign: "middle",
                        }}
                      />
                      <div className="form-control">
                        <div className={blogdetal["title-re-post"]}>
                          Never Underestimate The Influence Of Gaming
                        </div>
                        <div className={blogdetal.date}> May 7, 2022 </div>
                      </div>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-form">
                      <img
                        src="/img/blog-4.jpg"
                        alt="img-blog-post"
                        style={{
                          maxWidth: "50%",
                          verticalAlign: "middle",
                        }}
                      />
                      <div className="form-control">
                        <div className={blogdetal["title-re-post"]}>
                          GTA 5 on PS5 and Xbox Series: Everything you need to
                          know about the next-gen version
                        </div>
                        <div className={blogdetal.date}> May 5, 2022 </div>
                      </div>
                    </div>
                  </Link>
                </section>
                <section className={blogdetal.archives}>
                  <p className={blogdetal.title}>Archives</p>
                  <Link href={"#"}>September 2022</Link>
                  <Link href={"#"}>June 2022</Link>
                  <Link href={"#"}>May 2022</Link>
                  <Link href={"#"}>April 2022</Link>
                  <Link href={"#"}>March 2022</Link>
                  <Link href={"#"}>February 2022</Link>
                  <Link href={"#"}>January 2022</Link>
                </section>
                <section className={blogdetal.categories}>
                  <p className={blogdetal.title}>Categories</p>
                  <Link href={"#"}>Buy Guide</Link>
                  <Link href={"#"}>Game News</Link>
                  <Link href={"#"}>Players</Link>
                  <Link href={"#"}>Recommended</Link>
                  <Link href={"#"}>Work On</Link>
                </section>
                <section>
                  <p className={blogdetal.title}>Tags</p>
                  <Box
                    sx={{
                      marginTop: "16px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>FF16</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>NieR</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>GTA 5</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>GOW 4</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>RRD 2</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>Resident Evil</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>Tales of Immortal</div>
                    </Link>
                  </Box>
                </section>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default BlogDetail;
