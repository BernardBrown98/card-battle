import { Container, CssBaseline, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { MIN_USERNAME_LENGTH } from './constants';
import { StyledButton, StyledHeader, StyledStep, StyledVerticalContainer } from './styled';

export const Home = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [usernameInputValue, setUsernameInputValue] = useState('');

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
          <div>Second step</div>
        )}
      </Container>
    </>
  );
};
