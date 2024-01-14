import { GameData } from '../..';
import { SERVER_ROOT_URL } from '../../../../../../constants';
import { ApiError, useFetch } from '../../../../../../hooks';
import { StyledButton } from '../../../../../../styled';

interface HostGameProps {
  onClick: () => void;
  onSuccess: () => void;
  onFail: (error: ApiError) => void;
}

export const HostGame = ({ onClick, onSuccess, onFail }: HostGameProps) => {
  const { fetch: doFetch } = useFetch<GameData>(`${SERVER_ROOT_URL}/hostGame`, {
    onSuccess: onSuccess,
    onError: onFail,
  });

  return (
    <StyledButton
      variant="outlined"
      onClick={() => {
        doFetch();
        onClick();
      }}
    >
      Host Game
    </StyledButton>
  );
};
