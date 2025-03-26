import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import Navbar from './Navbar';
import HeroBannerImage from '../assets/images/heroimage.webp';

const HeroBanner = () => {
  const handleScrollToExercises = (e) => {
    e.preventDefault(); // Prevent default jump
    const section = document.getElementById('exercises');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        height: { lg: '600px', xs: '500px' },
        backgroundImage: `url(${HeroBannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        },
      }}
    >
      {/* Navbar positioned within Hero Section */}
      <Navbar />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'center',
          mt: '120px',
        }}
      >
        {/* Main Heading */}
        <Typography
          fontWeight="700"
          fontSize="58px"
          color="#FF2625"
          sx={{
            animation: 'fadeIn 1s ease',
            '@keyframes fadeIn': {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
          }}
        >
          BeastMode
        </Typography>

        {/* Subheading */}
        <Typography
          fontWeight="800"
          sx={{
            fontSize: { lg: '56px', xs: '36px' },
            mt: '16px',
            mb: '12px',
            lineHeight: '1.2',
            background: 'linear-gradient(90deg, #FF2625, #ff7e67)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'slideDown 1s ease',
            '@keyframes slideDown': {
              from: { transform: 'translateY(-20px)', opacity: 0 },
              to: { transform: 'translateY(0)', opacity: 1 },
            },
          }}
        >
          Train Today <br />
          Triumph Tomorrow
        </Typography>

        {/* Description */}
        <Typography
          fontSize="20px"
          fontWeight="400"
          lineHeight="1.6"
          sx={{
            mt: '12px',
            mb: '30px',
            maxWidth: '600px',
            margin: '0 auto',
            animation: 'fadeIn 1.2s ease',
          }}
        >
          Transform your body and mind with expert-backed workouts.
        </Typography>

        {/* CTA Button */}
        <Button
          onClick={handleScrollToExercises} // Smooth scroll handler
          sx={{
            backgroundColor: '#FF2625',
            color: '#fff',
            mt: '10px',
            fontSize: '18px',
            fontWeight: '500',
            padding: '12px 36px',
            borderRadius: '30px',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            '&:hover': {
              backgroundColor: '#ff4545',
              transform: 'scale(1.05)',
            },
          }}
        >
          Explore Exercises
        </Button>
      </Box>
    </Box>
  );
};

export default HeroBanner;
