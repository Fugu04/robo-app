import { Box } from '@mui/material';
import React, { useState } from 'react';

import correct from './correct.mp3'
import error from './error.mp3';
const InputContainer = ({ answers, containerId }) => {
    const correctAudio = new Audio(correct);
    const errorAudio = new Audio(error);
    const [values, setValues] = useState(Array(answers.length).fill(''));
    const [isDisabled, setIsDisabled] = useState(false);
    const [inputStyles, setInputStyles] = useState(Array(answers.length).fill(''));
    const [shake, setShake] = useState(false);


    

    const handleChange = (index, event) => {
        const newValues = [...values];
        newValues[index] = event.target.value;
        setValues(newValues);
    };

    const btnOnClick = () => {
        let isCorrect = values.length === answers.length && values.every((value, index) => value === answers[index]);

        if (isCorrect) {
            correctAudio.currentTime = 0;
            correctAudio.play();
            setInputStyles(values.map((value, index) => answers[index] === value ? 'success' : ''));
            setIsDisabled(true);
        } else {
            errorAudio.currentTime = 0;
            errorAudio.play();
            setInputStyles(values.map((value, index) => answers[index] !== value ? 'error' : ''));
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    const restartClick = () => {
        setValues(Array(answers.length).fill(''));
        setInputStyles(Array(answers.length).fill(''));
        setIsDisabled(false);
    };

    const showAnswers = () => {
        setValues(answers);
    };

    return (
        <Box display="flex" flexDirection="column" gap="10px" id={containerId}>
        {values.map((value, index) => (
            <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e)}
                className={`dynamic-input ${inputStyles[index]}`}
             
            />
        ))}
       
        <Box sx={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "center", gap: "15px", position: "absolute", top: 0, right: -120}}>
         <button onClick={btnOnClick} disabled={isDisabled}  className='question__btn btn'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 48 48">
          <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
          </svg>
          </button>
        <button onClick={restartClick} className='question__btn btn'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 64 64">
          <path d="M58,32c0,14.359-11.641,26-26,26S6,46.359,6,32C6,17.641,17.641,6,32,6S58,17.641,58,32z M45.581,23.785	c-1.845-2.961-4.678-5.273-7.941-6.478l-1.404,3.746c2.416,0.931,4.501,2.685,5.835,4.888c1.348,2.2,1.873,4.846,1.57,7.394	c-0.305,2.544-1.501,4.95-3.319,6.747c-1.814,1.799-4.221,2.973-6.745,3.261c-2.532,0.311-5.136-0.242-7.295-1.55	c-2.165-1.297-3.882-3.329-4.769-5.669c-0.903-2.326-0.991-4.98-0.245-7.35c0.48-1.56,1.321-3.001,2.415-4.212l3.145,3.493	l2.75-12.047l-12.281,1.462l3.057,3.395c-1.732,1.844-3.042,4.08-3.751,6.511c-1.017,3.433-0.833,7.176,0.502,10.485	c1.318,3.313,3.775,6.125,6.837,7.899c3.059,1.793,6.717,2.5,10.2,2.024c3.501-0.449,6.815-2.125,9.27-4.632	c2.466-2.498,4.068-5.84,4.438-9.33C48.226,30.353,47.446,26.742,45.581,23.785z"></path>
          </svg>
        </button>
        <button onClick={showAnswers} className='question__btn btn' >
          <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px"viewBox="0 0 48 48">
          <path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"></path>
          </svg>
        </button>
       
      </Box>
    </Box>
    );
};


export default InputContainer;