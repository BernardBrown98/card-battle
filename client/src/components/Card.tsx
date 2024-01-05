import { Box, Typography } from '@mui/material';

interface CardProps {
  title: string;
  attack: number;
  health: number;
}

export const Card = ({ title, attack, health }: CardProps) => {
  return (
    <Box
      sx={{
        mt: 20,
        boxShadow: '-3px 0 0 0 black, 3px 0 0 0 black, 0 -3px 0 0 black, 0 3px 0 0 black',
        border: 'solid black',
        width: '230px',
        minHeight: 'auto',
      }}
    >
      <Box
        sx={{
          boxShadow: '-3px 0 0 0 black, 3px 0 0 0 black, 0 -3px 0 0 black, 0 3px 0 0 black',
          border: 'solid black',
          m: '5px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <Typography variant="h3">name: {title}</Typography>
        <Typography variant="h4">attack: {attack}</Typography>
        <Typography variant="h4">
          health: {health}/{health}
        </Typography>
      </Box>
    </Box>
  );
};
