import { FC, ReactNode, useState, useCallback, useMemo } from 'react';
import { Alert, AlertTitle, Slide, alertClasses, styled } from '@mui/material';

import { ErrorContext, defaultErrorContext } from '../errorContext';

interface IErrorContextProvider {
  children: ReactNode;
}

const ErrorContextProvider: FC<IErrorContextProvider> = ({ children }) => {
  const [message, setMessage] = useState(defaultErrorContext.message);

  const showError = useCallback((newMessage: string) => {
    setMessage(newMessage);
  }, []);

  return (
    <ErrorContext.Provider
      value={useMemo(
        () => ({
          message,
          showError,
        }),
        [message, showError]
      )}
    >
      {children}
      <Slide direction="right" in={!!message}>
        <StyledAlert severity="error" onClose={() => setMessage('')}>
          <AlertTitle>Ошибка</AlertTitle>
          {message}
        </StyledAlert>
      </Slide>
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;

const StyledAlert = styled(Alert)(({ theme: { palette } }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: '1300',
  background: palette.error.main,
  color: palette.primary.main,
  [`& .${alertClasses.icon}`]: {
    color: palette.primary.main,
  },
}));
