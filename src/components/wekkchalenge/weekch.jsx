import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import baner from "./../../images/banner.jpg";
import tab from "./../../images/tab-bg-active.png";
import tabdisable from "./../../images/tab-bg.png";

const WeekChallenge = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img className="baner" src={baner} alt="baner" />
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative", mt: "500px", ml: "45px" }}>
              <Button
                sx={{
                  backgroundImage: `url(${tab})`,
                  backgroundRepeat: "no-repeat",
                  width: "275px",
                  height: "145px",
                }}
              >
                <Typography
                  sx={{
                    pr: "45",
                    color: "white",
                    pb: "30px",
                    fontFamily: "europebet",
                  }}
                >
                  1-4 კვირა <br />{" "}
                  <Typography
                    sx={{ fontSize: "30px", fontFamily: "europebet" }}
                  >
                    2 000 000₾
                  </Typography>
                </Typography>
              </Button>
              <Button
                sx={{
                  backgroundImage: `url(${tabdisable})`,
                  backgroundRepeat: "no-repeat",
                  width: "275px",
                  height: "145px",
                  ml: "95px",
                }}
              >
                <Typography sx={{ mr: "60px" }}>
                  <Typography
                    sx={{
                      pr: "45",
                      color: "#D5D5D5",

                      pb: "30px",
                      fontFamily: "NinoMtav",
                      pl: "45px",
                    }}
                  >
                    5-8 კვირა <br />{" "}
                    <Typography
                      sx={{ fontSize: "30px", fontFamily: "NinoMtav" }}
                    >
                      2 000 000₾
                    </Typography>
                  </Typography>
                </Typography>
              </Button>
              <Button
                disabled
                sx={{
                  backgroundImage: `url(${tabdisable})`,
                  backgroundRepeat: "no-repeat",
                  width: "275px",
                  height: "145px",
                  ml: "95px",
                }}
              >
                <Typography sx={{ mr: "60px" }}>
                  <Typography
                    sx={{
                      pr: "45",
                      color: "#D5D5D5",

                      pb: "30px",
                      fontFamily: "NinoMtav",
                      pl: "45px",
                    }}
                  >
                    5-8 კვირა <br />{" "}
                    <Typography
                      sx={{ fontSize: "30px", fontFamily: "NinoMtav" }}
                    >
                      2 000 000₾
                    </Typography>
                  </Typography>
                </Typography>
              </Button>
              <Button
                disabled
                sx={{
                  backgroundImage: `url(${tabdisable})`,
                  backgroundRepeat: "no-repeat",
                  width: "275px",
                  height: "145px",
                  ml: "95px",
                }}
              >
                <Typography sx={{ mr: "60px" }}>
                  <Typography
                    sx={{
                      pr: "45",
                      color: "#D5D5D5",
                      pb: "30px",
                      fontFamily: "europebet",
                      pl: "45px",
                    }}
                  >
                    5-8 კვირა <br />{" "}
                    <Typography
                      sx={{ fontSize: "30px", fontFamily: "NinoMtav" }}
                    >
                      2 000 000₾
                    </Typography>
                  </Typography>
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: "34px" }}>
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: "center",
              color: "white",
              fontFamily: "europebet",
            }}
          >
            12 კვირის განმავლობაში, მიიღე ფულადი პრიზები <br /> ყოველკვირეული
            საპრიზო ფონდიდან
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default WeekChallenge;
