import React from "react";
import { Box, Typography, Button } from "@mui/material";


function ItemInput({question}) {

  return (
        <Box sx={{width: "100%", marginTop: "30px", padding: "30px", backgroundColor: `${question.bgColor}`}}>
            <Typography variant="body" color="initial" fontSize={24}>{question.text}</Typography>
            
        </Box>
  );
}

export default ItemInput;