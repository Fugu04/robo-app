import React, { useState } from "react";
import Tooltip from '@mui/material/Tooltip'
import { Box,Typography, Fab, Modal } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function Add(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <Tooltip
                onClick={e=>setOpen(true)}
                title="Add" 
                sx={{ 
                    position: "fixed",
                    bottom: 20,
                    left: {xs: "calc(50% - 25px)", md: 30},
                    }}>
                <Fab color="primary" aria-label="add">
                   <AddIcon />
                </Fab>
            </Tooltip>
            <Modal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box>
    hello
  </Box>
</Modal>
        </>
    )
}

export default Add;