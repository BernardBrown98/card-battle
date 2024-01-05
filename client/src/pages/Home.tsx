import { Container, CssBaseline, Box, Typography, Stack } from '@mui/material';
import { Card } from '../components/Card';
import { useFetch } from '../hooks/useFetch';
export const Home = () => {
  const { data } = useFetch('http://localhost:3000/hostGame');
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Stack
          direction={'row'}
          spacing={10}
          justifyContent={'center'}
          alignItems={'start'}
          sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '50px' }}
        >
          <Card title={data[0].title} attack={data[0].attack} health={data[0].health} />
          <Card title={data[1].title} attack={data[1].attack} health={data[1].health} />
        </Stack>
        <Stack
          direction={'column'}
          justifyContent={'center'}
          sx={{
            height: '100vh',
            bgcolor: 'darkgrey',
          }}
        >
          <Typography textAlign={'center'} sx={{ typography: { xs: 'h2', sm: 'h1' }, mb: { xs: '20px', sm: '30px' } }}>
            Card Battle
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: '20px', sm: '50px' }}
            justifyContent={'center'}
            alignContent={'center'}
          >
            <Box
              sx={{
                cursor: 'pointer',
                alignSelf: 'center',
                boxShadow: '-3px 0 0 0 black, 3px 0 0 0 black, 0 -3px 0 0 black, 0 3px 0 0 black',
                border: 'solid black',
                px: '40px',
                py: '5px',
                typography: 'h5',
                ':hover': { transform: 'translateY(-4px)' },
              }}
              onClick={() => console.log(data)}
            >
              Host Game
            </Box>
            <Box
              sx={{
                cursor: 'pointer',
                alignSelf: 'center',
                boxShadow: '-3px 0 0 0 black, 3px 0 0 0 black, 0 -3px 0 0 black, 0 3px 0 0 black',
                border: 'solid black',
                px: '40px',
                py: '5px',
                typography: 'h5',
                ':hover': { transform: 'translateY(-4px)' },
              }}
            >
              Join Game
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
