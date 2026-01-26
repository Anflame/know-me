import { createContext } from 'react';
import { TAlertType } from '@/types';

interface AlertContextType {
  message: string;
  type: TAlertType;
  showAlert: (message: string, type: TAlertType) => void;
}

export const defaultAlertContext: AlertContextType = {
  message: '',
  type: 'success',
  showAlert: () => {},
};

export const AlertContext = createContext<AlertContextType>(defaultAlertContext);
