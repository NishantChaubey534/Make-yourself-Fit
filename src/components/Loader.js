import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack justifyContent="center" alignItems="center" width="100%" height="100%">
    <InfinitySpin color="#FF2625" width="200px" />
  </Stack>
);

export default Loader;
