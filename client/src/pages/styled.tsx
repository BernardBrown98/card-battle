import styled from '@emotion/styled';
import { Button, Stack, Step, Typography } from '@mui/material';

export const StyledHeader = styled(Typography)`
  text-align: center;
`;

export const StyledStep = styled(Step)`
  .MuiStepLabel-root .Mui-active,
  .MuiStepLabel-root .Mui-completed {
    color: black;
  }
`;

export const StyledButton = styled(Button)`
  width: 200px;
  color: black;
  border-color: black;
  border-width: 4px;

  :hover {
    transform: translateY(-4px);
    border-width: 4px;
  }
`;

export const StyledVerticalContainer = styled(Stack)`
  margin-top: 100px;
  align-items: center;
`;
