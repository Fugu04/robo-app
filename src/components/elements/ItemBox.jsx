import React from "react";
import { Box, Typography, Button } from "@mui/material";


function ItemBox({text}) {

  return (
        <Box sx={{width: "100%", marginTop: "30px", padding: "30px", backgroundColor: `green`}}>
             {text}
        </Box>
  );
}

export default ItemBox;