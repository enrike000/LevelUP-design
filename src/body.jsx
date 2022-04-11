import { Box } from "@mui/system";
import React from "react";
import FavoriteSlots from "./components/favorite slots/favoriteslots";
import Footer from "./components/footer/footer";
import LeaderBoard from "./components/leaderboard/leaderboard";
import Rule from "./components/rules/rule";
import TiTle from "./components/title/title";
import WeekChallenge from "./components/wekkchalenge/weekch";

const Page1 = () => {
  return (
    <>
      <Box
        sx={{
          height: "1",
          bgcolor: "#141529",
        }}
      >
        <Box>
          <TiTle />
        </Box>

        <Box sx={{ mt: "35px" }}>
          <WeekChallenge />
        </Box>

        <Box>
          <LeaderBoard />
        </Box>

        <Box sx={{ mt: "100px" }}>
          <FavoriteSlots />
        </Box>

        <Box sx={{ mt: "100px" }}>
          <Rule />
        </Box>

        <Box sx={{ mt: "40px" }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Page1;
