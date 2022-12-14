
import { Box, Button, Popper } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup, selectMessage, selectShowPopup } from './popupSlice';

import './styles.css';

export function PopupComponent() {

  const showPopup = useSelector(selectShowPopup);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  return (
        <Popper open={showPopup} >
          <Box className="showPopup">
          {message}
            <Button variant="outlined" className="crawler_param_btn" onClick={e => dispatch(closePopup())}>Close </Button>
          </Box>
        </Popper>
  );
}