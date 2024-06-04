import { Avatar, Box, Typography, styled } from '@mui/material';
import React, { useState } from 'react';


import prevIcon from "./assets/prev.png";
import nextIcon from "./assets/next.png";
const DisplayContainer = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };



      const StyledTypography = styled(Typography)({
        fontSize: "24px",
        variant: "body",
        fontWeight: "400"
      
      }); 
      

    return (

    <Box className="display-container" >
     
         
     <Box  textAlign="end">
                <button className='prev__btn btn'  onClick={handlePrev}><img width="50px" src={prevIcon} alt="" />
                    </button>
                <button  className='next__btn btn'  onClick={handlePrev}><img width="50px" src={nextIcon} /></button>
            </Box> 
             
          <StyledTypography>{data[currentIndex].text.split('\n').map((line, index) => <div key={index}>{line}</div>)}</StyledTypography>
          <Box paddingInline={15} flex={10} display="flex" flexDirection="column" alignItems="center" gap={2}>
             
            <img width="100%" src={data[currentIndex].image} alt={data[currentIndex].text} />
            <Typography variant="body" color="initial">{data[currentIndex].imageAlt}</Typography>
          </Box>
        </Box>
    
    );
};

export default DisplayContainer;
