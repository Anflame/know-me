import { FC, ReactNode, useState, useCallback, useMemo } from 'react';
import { Alert, AlertTitle, Slide, alertClasses, styled } from '@mui/material';

import { AlertContext, defaultAlertContext } from '@/utils';
import { TAlertType } from '@/types';

interface IErrorContextProviderProps {
  children: ReactNode;
}

const AlertContextProvider: FC<IErrorContextProviderProps> = ({ children }) => {
  const [message, setMessage] = useState(defaultAlertContext.message);
  const [type, setType] = useState<TAlertType>(defaultAlertContext.type);

  const showAlert = useCallback((newMessage: string, newType: TAlertType) => {
    setType(newType);
    setMessage(newMessage);
  }, []);

  const contextProviderValue = useMemo(
    () => ({
      message,
      type,
      showAlert,
    }),
    [message, type, showAlert]
  );

  return (
    <AlertContext.Provider value={contextProviderValue}>
      {children}
      <Slide direction="right" in={!!message}>
        <StyledAlert severity={type} onClose={() => setMessage('')} type={type}>
          <AlertTitle>{type === 'success' ? 'Успешно' : 'Ошибка'}</AlertTitle>
          {message}
        </StyledAlert>
      </Slide>
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;

const StyledAlert = styled(Alert)<{ type: TAlertType }>(({ theme: { palette }, type }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: '1300',
  background: type === 'error' ? palette.error.main : palette.success.main,
  color: type === 'error' ? palette.primary.main : palette.primary.dark,
  [`& .${alertClasses.icon}`]: {
    color: palette.primary.main,
  },
}));
