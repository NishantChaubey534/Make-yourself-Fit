import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      background: bodyPart === item ? '#e0e0e0' : '#f5f5f5', // Changed red to light grey
      borderRadius: '16px',
      width: '260px',
      height: '280px',
      cursor: 'pointer',
      gap: '24px',
      boxShadow: bodyPart === item ? '0px 4px 12px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 6px 20px rgba(0,0,0,0.2)',
        backgroundColor: '#f0f0f0', // Light grey on hover
      },
      '&:active': {
        backgroundColor: '#d9d9d9', // Slightly darker grey on click
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '50px', height: '50px' }} />
    <Typography
      fontSize="22px"
      fontWeight="600"
      color={bodyPart === item ? '#333' : '#555'}
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
