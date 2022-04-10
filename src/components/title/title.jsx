import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import prize from "./../../images/prize-en.png";
const TiTle = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#585864" }}>
        <Grid container justifyContent="flex-end" alignItems="center">
          {" "}
          <Typography
            sx={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "60px",
              color: "white",
              fontSize: "17px",
              mr: "40%",
              fontFamily: "NinoMtav",
            }}
          >
            10 ᲘᲐᲜᲕᲠᲘᲓᲐᲜ - 12 ᲛᲐᲠᲢᲐᲛᲓᲔ
          </Typography>
          <Button sx={{ color: "gray", borderRadius: "30px" }}>
            <DisabledByDefaultIcon />
          </Button>
        </Grid>
      </Box>
      <Box sx={{ overflow: "hidden", ml: "43px" }}>
        <Box sx={{ mt: "30px", float: "left" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "30px",
              bgcolor: "#585864",
              width: "93px",
              height: "27px",
              fontFamily: "glaho",
            }}
          >
            სლოტები
          </Button>
          <Typography
            sx={{
              mt: "21px",
              color: "white",
              fontSize: "30px",
              fontFamily: "NinoMtav",
            }}
          >
            PRAGMATIC-ის რჩეულ სლოტებში დიდი <br /> ფულადი პრიზები და ქეშდროფები
            გელოდება
          </Typography>
          <Typography
            sx={{
              mt: "15.5px",
              color: "white",
              fontSize: "18px",
              fontFamily: "NinoMtav",
            }}
          >
            52 კვირის განმავლობაში, მიიღე ფულადი პრიზები <br /> ყოველკვირეული
            საპრიზო ფონდიდან
          </Typography>
        </Box>
        <Box sx={{ float: "right" }}>
          <img className="prize" src={prize} alt="prize" />
        </Box>
      </Box>
    </>
  );
};
export default TiTle;
