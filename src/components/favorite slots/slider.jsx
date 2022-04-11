import React from "react";
import Slot1 from "../favorite slots/thumb/CaishenGold.jpg";
import Slot2 from "../favorite slots/thumb/releaseKraken.jpg";
import Slot3 from "../favorite slots/thumb/WolfGold.jpg";
import Slot4 from "../favorite slots/thumb/GemsBonanza.jpg";
import Slot5 from "../favorite slots/thumb/MadameDestiny.jpg";
import Slot6 from "../favorite slots/thumb/SpartanKing.jpg";
import Slot7 from "../favorite slots/thumb/MustangGold.jpg";
import Slot8 from "../favorite slots/thumb/releaseKraken.jpg";
import Slot9 from "../favorite slots/thumb/TheDogHouse.jpg";
import Slot10 from "../favorite slots/thumb/SpartanKing.jpg";

import { Box } from "@mui/system";

const Slots = () => {
  const img = [
    Slot1,
    Slot2,
    Slot3,
    Slot4,
    Slot5,
    Slot6,
    Slot7,
    Slot8,
    Slot9,
    Slot10,
  ];

  return (
    <Box
      sx={{
        width: "1300px",
        height: "260px",
        display: "flex",
        overflowX: "scroll",
        p: "20px",
      }}
    >
      {img.map((element) => (
        <Box
          sx={{
            width: "250px",
            flexShrink: 0,
            height: "100%",
          }}
        >
          <img src={element} alt="slots" />
        </Box>
      ))}
    </Box>
  );
};
export default Slots;
