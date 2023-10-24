import { createContext } from 'react';

interface ErrorContextType {
  message: string;
  showError: (message: string) => void;
}

export const defaultErrorContext: ErrorContextType = {
  message: '',
  showError: () => {},
};

export const ErrorContext = createContext<ErrorContextType>(defaultErrorContext);
