import React from "react";
import lineimg from "./../../images/border-bg.png";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Footer = () => {
  return (
    <>
      <Box>
        <img className="borderbg" src={lineimg} alt="xazi" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Button sx={{ fontSize: "13px", color: "#FFFFFF" }}>
            <ArrowBackIosNewIcon sx={{ color: "#FFFFFF" }} />
            ᲬᲘᲜᲐ ᲐᲥᲪᲘᲐ
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#F05A22",
              fontSize: "13px",
              color: "#FFFFFF",
              height: "48px",
              width: "170px",
            }}
          >
            Place a bet
          </Button>
          <Button sx={{ fontSize: "13px", color: "#FFFFFF" }}>
            ᲨᲔᲛᲓᲔᲒᲘ ᲐᲥᲪᲘᲐ
            <ArrowForwardIosIcon sx={{ color: "#FFFFFF" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
