import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card"
    to={`/exercise/${exercise.id}`}
    style={{
      textDecoration: 'none',
      color: 'inherit',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0px 6px 16px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      height: '480px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '&:hover': {
        transform: 'scale(1.03)',
      },
    }}
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      style={{
        width: '100%',
      }}
    />
    <Stack direction="row" spacing={1} mt={2} ml={2}>
      <Button
        sx={{
          color: '#fff',
          background: '#FFA9A9',
          fontSize: '14px',
          borderRadius: '20px',
          padding: '6px 12px',
          '&:hover': { background: '#ff9999' },
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          color: '#fff',
          background: '#FCC757',
          fontSize: '14px',
          borderRadius: '20px',
          padding: '6px 12px',
          '&:hover': { background: '#ffcc66' },
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml={2}
      mt={1}
      mb={2}
      fontWeight="600"
      color="#333"
      fontSize="20px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
