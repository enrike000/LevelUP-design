import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Rule = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{ color: "white", textAlign: "center", fontFamily: "NinoMtav" }}
        >
          წესები და პირობები
        </Typography>
        <Box sx={{ ml: "45px", mr: "43px", mt: "34px" }}>
          <Accordion sx={{ bgcolor: "#585864" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "NinoMtav",
                }}
              >
                როდის იწყება და რა ფორმატით გაიმართება აქცია
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "Red" }}>11/04/2022.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ bgcolor: "#585864", mt: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "NinoMtav",
                }}
              >
                როგორ მივიღო აქციაში მონაწილეობა?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "aquamarine" }}>1920x1080</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ bgcolor: "#585864", mt: "10px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "NinoMtav",
                }}
              >
                სხვადასვა
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "yellow" }}>Full HD</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};
export default Rule;
