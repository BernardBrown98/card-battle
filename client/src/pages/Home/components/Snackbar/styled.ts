import styled from '@emotion/styled';
import { Alert } from '@mui/material';

export const StyledAlert = styled(Alert)`
  font-size: 20px;

  .MuiAlert-icon {
    display: flex;
    align-items: center;
  }

  .MuiAlert-action {
    display: flex;
    align-items: center;
    padding-top: 0;
  }
`;
