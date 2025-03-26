import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo-2.png';

const Navbar = () => {
  const handleScrollToExercises = (e) => {
    e.preventDefault();
    const section = document.getElementById('exercises');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        padding: '20px 40px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'contain',
            transition: 'transform 0.3s ease',
          }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{
          fontSize: '18px',
          fontWeight: '500',
        }}
      >
        {/* Home Link */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#fff',
            paddingBottom: '4px',
            borderBottom: '2px solid #FF2625',
            transition: 'color 0.2s ease',
          }}
        >
          Home
        </Link>

        {/* Exercises Link */}
        <a
          href="#exercises"
          onClick={handleScrollToExercises}
          style={{
            textDecoration: 'none',
            color: '#fff',
            transition: 'color 0.2s ease',
            '&:hover': {
              color: '#FF2625',
            },
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
