import React from "react";
import { Box, Typography, styled, CardMedia } from "@mui/material";


function ItemTypography({question}) {
  const itemStyles = {
    backgroundColor: "red",
    padding: "10px"
  }
  return (
        <Box sx={{width: "100%", marginTop: "30px", padding: "30px", backgroundColor: `${question.bgColor}`}}>
            <Typography variant="body" color="initial" fontSize={24}>{question.text}</Typography>
            {/* <img
              width="100%"
              className="avatar"
              src= {question.imgSrc}
            />
            {question.videoSrc ?  <video width="100%" onPlay="auto" src={question.videoSrc}></video>:""}
           
            <Typography variant="body" color="initial">{question.altText}</Typography>
            {question.myCode} */}
        </Box>
  );
}

export default ItemTypography;