import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '120px', xs: '20px' }, p: '20px' }}>
      <Typography
        sx={{
          fontSize: { lg: '36px', xs: '24px' },
          fontWeight: '600',
          mb: '24px',
        }}
        color='#333'
      >
        Watch <span style={{ color: '#FF2625' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        direction='row'
        gap='24px'
        justifyContent='flex-start'
        flexWrap='wrap'
      >
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            style={{
              textDecoration: 'none',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
              display: 'block',
              width: '320px',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 8px 24px rgba(0,0,0,0.2)',
              },
            }}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{
                width: '320px',
                height: '180px',
                objectFit: 'cover',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
              }}
            />
            <Box p='12px' sx={{ backgroundColor: '#fafafa' }}>
              <Typography
                fontSize='18px'
                fontWeight='600'
                color='#333'
                sx={{
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                  lineHeight: '1.4',
                }}
              >
                {item.video.title}
              </Typography>
              <Typography
                fontSize='14px'
                color='#666'
                sx={{
                  whiteSpace: 'normal',
                  overflowWrap: 'break-word',
                }}
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
