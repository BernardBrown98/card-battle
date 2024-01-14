import { Container, CssBaseline, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import { HomeFirstStep, HomeSecondStep } from './components';
import { StyledHeader, StyledStep } from './styled';

export const Home = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goToNextStep = () => {
    setCurrentStepIndex((currentStep) => currentStep + 1);
  };

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

        {currentStepIndex === 0 ? <HomeFirstStep onStepCompleted={goToNextStep} /> : <HomeSecondStep />}
      </Container>
    </>
  );
};
