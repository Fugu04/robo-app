import React from "react";
import { Box, Typography, styled, CardMedia } from "@mui/material";


function ItemVideo({question}) {

  return (
        <Box sx={{marginTop: "30px", padding: "30px", backgroundColor: `${question.bgColor}`}}>
            <Typography variant="body" color="initial" fontSize={24}>{question.text}</Typography>
        
            {question.videoSrc ?  <video width="100%" onPlay="auto" src={question.videoSrc}></video>:""}
           
            <Typography variant="body" color="initial">{question.altText}</Typography>
        </Box>
  );
}

export default ItemVideo;