import { Container, CssBaseline, Stack, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { MIN_GAME_PIN_LENGTH, MIN_USERNAME_LENGTH } from './constants';
import { StyledButton, StyledHeader, StyledStep, StyledVerticalContainer } from './styled';

export const Home = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [gamePinInputValue, setGamePinInputValue] = useState('');
  const [gamePinInputHelperText, setGamePinInputHelperText] = useState('');

  useEffect(() => {
    if (gamePinInputValue === '') {
      setGamePinInputHelperText('');
      return;
    }
    const numbersOnlyRegex = /^\d+$/;
    if (!numbersOnlyRegex.test(gamePinInputValue)) {
      setGamePinInputHelperText(`Game pin must only be numerical values.`);
      return;
    }
    if (gamePinInputValue.length !== MIN_GAME_PIN_LENGTH) {
      setGamePinInputHelperText(`Game pin must be ${MIN_GAME_PIN_LENGTH} characters.`);
      return;
    }

    setGamePinInputHelperText('');
    return;
  }, [gamePinInputValue]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <StyledHeader sx={{ typography: { xs: 'h2', sm: 'h1' }, mb: { xs: '20px', sm: '30px' } }}>
          Card Battle
        </StyledHeader>
        <Stepper activeStep={currentStepIndex}>
          <StyledStep>
            <StepLabel>Enter Username</StepLabel>
          </StyledStep>
          <StyledStep>
            <StepLabel>Play</StepLabel>
          </StyledStep>
        </Stepper>

        {currentStepIndex === 0 ? (
          <>
            <StyledVerticalContainer spacing={3}>
              <Typography variant="h3">Enter Username</Typography>
              <TextField
                required
                label="Username"
                variant="standard"
                error={usernameInputValue !== '' && usernameInputValue.length < MIN_USERNAME_LENGTH}
                helperText="Your username must be at least 4 characters."
                onChange={(event) => setUsernameInputValue(event.target.value)}
              />
              <StyledButton
                variant="outlined"
                disabled={usernameInputValue === '' || usernameInputValue.length < MIN_USERNAME_LENGTH}
                onClick={() => setCurrentStepIndex((currentStep) => currentStep + 1)}
              >
                Next
              </StyledButton>
            </StyledVerticalContainer>
          </>
        ) : (
          <StyledVerticalContainer spacing={4}>
            <Typography variant="h3">How Do You Want To Play?</Typography>
            <StyledButton variant="outlined" onClick={() => console.log('Host game button button clicked')}>
              Host Game
            </StyledButton>
            <Stack direction="row" spacing={4}>
              <TextField
                label="Game Pin"
                variant="outlined"
                error={gamePinInputHelperText !== ''}
                helperText={gamePinInputHelperText}
                onChange={(event) => setGamePinInputValue(event.target.value)}
              />
              <StyledButton variant="outlined" onClick={() => console.log('Join game button button clicked')}>
                Join Game
              </StyledButton>
            </Stack>
          </StyledVerticalContainer>
        )}
      </Container>
    </>
  );
};
