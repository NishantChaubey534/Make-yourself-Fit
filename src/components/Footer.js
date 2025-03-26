import React from 'react';
import { Box, Stack, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';

import Logo from '../assets/images/logo-3.avif';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" py="40px">
    <Stack gap="24px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px">
      {/* Logo */}
      <img
        src={Logo}
        alt="logo"
        style={{
          width: '180px',
          height: '140px',
          objectFit: 'contain',
        }}
      />

      {/* Quick Links */}
      <Stack direction="row" spacing={4}>
        <Link
          href="/"
          underline="none"
          sx={{
            fontSize: '16px',
            color: '#333',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          Home
        </Link>
        <Link
          href="#exercises"
          underline="none"
          sx={{
            fontSize: '16px',
            color: '#333',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          Exercises
        </Link>
        <Link
          href="/about"
          underline="none"
          sx={{
            fontSize: '16px',
            color: '#333',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          underline="none"
          sx={{
            fontSize: '16px',
            color: '#333',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          Contact
        </Link>
      </Stack>

      {/* Social Media Icons */}
      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{
            color: '#555',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{
            color: '#555',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{
            color: '#555',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://youtube.com"
          target="_blank"
          sx={{
            color: '#555',
            transition: 'color 0.3s ease',
            '&:hover': { color: '#FF2625' },
          }}
        >
          <YouTube />
        </IconButton>
      </Stack>
    </Stack>

    {/* Footer Text */}
    <Typography
      variant="h5"
      sx={{
        fontSize: { lg: '24px', xs: '18px' },
        mt: '32px',
        textAlign: 'center',
        color: '#555',
        fontWeight: '400',
      }}
    >
      The real workout starts when you want to stop. &#39;Never give up&#39;
    </Typography>

    {/* Copyright */}
    <Typography
      variant="body2"
      sx={{
        fontSize: '14px',
        textAlign: 'center',
        color: '#999',
        mt: '24px',
      }}
    >
      © {new Date().getFullYear()} BeastMode. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
