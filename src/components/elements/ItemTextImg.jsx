import React from "react";
import { Box, Typography, styled, CardMedia } from "@mui/material";


function ItemTextImg({question}) {
  const itemStyles = {
    backgroundColor: "red",
    padding: "10px"
  }
  return (
        <Box sx={{marginTop: "30px", padding: "30px", backgroundColor: `${question.bgColor}`}}>
            <Typography variant="body" color="initial" fontSize={24}>{question.text}</Typography>
            <img
              width="100%"
              className="avatar"
              src= {question.imgSrc}
            />
        
            <Typography variant="body" color="initial">{question.altText}</Typography>
           
        </Box>
  );
}

export default ItemTextImg;