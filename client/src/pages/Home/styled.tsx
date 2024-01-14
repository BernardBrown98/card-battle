import { Step, Typography, styled } from '@mui/material';

export const StyledHeader = styled(Typography)`
  text-align: center;
`;

export const StyledStep = styled(Step)`
  .MuiStepLabel-root .Mui-active,
  .MuiStepLabel-root .Mui-completed {
    color: black;
  }
`;
