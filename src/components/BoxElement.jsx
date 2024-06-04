import React from "react";
import { Box, Typography, styled, CardMedia } from "@mui/material";
import { Computer } from "@mui/icons-material";

function BoxElement() {
  return (
   <Box display="flex" gap="20px" alignItems="center">
        <Computer sx={{width: 40, height: 40}} />
        <Box sx={{ padding: 10, backgroundColor: "#cc9",transition: ".2s", ":hover":{ transform: "translateY(-10px)"}}}>
            <Typography variant="body" color="initial" fontSize={32}>Scratch программалау ортасының терезесімен танысасың.</Typography>
        </Box>
   </Box>
  );
}

export default BoxElement;