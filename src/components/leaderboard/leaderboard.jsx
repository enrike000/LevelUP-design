import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Cxrili from "./table";
import Cxrili1 from "./table1";
import plus from "../../images/plus.png";

const LeaderBoard = () => {
  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{
            backgroundColor: "#1A293B",
            color: "white",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
        >
          {["2.07-29.07", "2.07-29.07", "2.07-29.07", "2.07-29.07"].map(
            (item, i) => (
              <Stack
                sx={{
                  height: "40px",
                  width: "120px",
                  backgroundColor: i === 0 ? "#2E9EA1" : "transparent",
                  px: 3,
                  py: 0.3,
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
                justifyContent="center"
                alignItems="center"
              >
                {item}
              </Stack>
            )
          )}
        </Stack>
      </Stack>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            m: 0,
            position: "absolute",
            top: "50%",
            left: "46%",
            transform: "translateX(-50%)",
            // eslint-disable-next-line no-dupe-keys
            transform: "scale(1.5)",
          }}
        >
          <img src={plus} alt="plus" />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ bgcolor: "#192537", width: 1, height: "650px" }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                textAlign: "center",
                fontFamily: "europebet",
              }}
            >
              მოხვდი ყოველკვირეულ ლიდერბორდში
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                mt: "15px",
                mb: "15px",
                fontFamily: "europebet",
              }}
            >
              ერთ სპინზე დაფიქრსირებული მოგების <br /> ყველაზე მაღალი
              კოეფიციენტი არის შენი <br /> ქულა ლიდერბორდში
            </Typography>
            <Box
              sx={{
                bgcolor: "#203248",
                height: "500px",
                width: "650px",
                borderRadius: "10px",
              }}
            >
              <Stack direction="row">
                <Box
                  sx={{
                    bgcolor: "#2E9EA1",
                    width: "300px",
                    borderTopLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    position: "absolute",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontFamily: "europebet" }}
                  >
                    ყოველდღიური 248 000ლ
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#227C7E",
                    width: "150px",
                    borderBottomRightRadius: "10px",
                    ml: "290px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "europebet",
                    }}
                  >
                    TOP 1500
                  </Typography>
                </Box>
              </Stack>

              <Cxrili />
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                textAlign: "center",
                fontFamily: "europebet",
              }}
            >
              ყოველდღე მიიღე შემთხვევით ფულადი <br />
              პრიზი ნებისმიერ სპინზე
            </Typography>
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                mt: "15px",
                mb: "15px",
                fontFamily: "europebet",
              }}
            >
              ყოველდღიური, 36 000₾-ის ფულადი <br /> პრიზები
            </Typography>
            <Box
              sx={{
                bgcolor: "#203248",
                height: "500px",
                width: "650px",
                borderRadius: "10px",
              }}
            >
              <Stack direction="row">
                <Box
                  sx={{
                    bgcolor: "#F19020",
                    width: "300px",
                    borderTopLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    position: "absolute",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "white", fontFamily: "europebet" }}
                  >
                    ყოველდღიური 248 000ლ
                  </Typography>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#D2770E",
                    width: "150px",
                    borderBottomRightRadius: "10px",
                    ml: "294px",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textAlign: "center",
                      fontFamily: "europebet",
                    }}
                  >
                    15000 პრიზი
                  </Typography>
                </Box>
              </Stack>

              <Cxrili1 />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ bgcolor: "#192537", height: "100px" }}
      >
        <Typography
          sx={{
            color: "#A5AAB0",
            textAlign: "center",
            mt: "10px",
            fontFamily: "europebet",
          }}
        >
          *პრიზები დაირიცხება ავტომატურად მოგებისთანავე <br />
          *ლიდერბორდი და დარჩენილი ქეშ დროფ პრიზების ოდენობა განახლდება
          ავტომატურად, მონაწილე <br />
          თამაშების ფანჯარაში
        </Typography>
      </Stack>
    </>
  );
};
export default LeaderBoard;
