import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export const Sockets = () => {
  const [socketId, setSocketId] = useState<string>();

  useEffect(() => {
    console.log('effect');
    socket.on('connect', () => {
      console.log(`socket is ${socket.id}`);
      setSocketId(socket.id);
    });
  }, []);

  return (
    <>
      <Typography
        variant="h6"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', mt: '20px' }}
      >
        Your socket id is:
        <Typography variant="body1" sx={{ fontWeight: '600' }}>
          {socketId}
        </Typography>
      </Typography>
    </>
  );
};
