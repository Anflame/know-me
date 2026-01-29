import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { ReactElement, ReactNode } from 'react';

import { AuthContext, AlertContext } from '@/utils';

export const AllTheProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

export function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
}

export function createWrapper({
  queryClient = createTestQueryClient(),
  changeAuth = jest.fn(),
  showAlert = jest.fn(),
}: {
  queryClient?: QueryClient;
  changeAuth?: jest.Mock;
  showAlert?: jest.Mock;
} = {}) {
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <AlertContext.Provider value={{ showAlert, type: 'error', message: '' }}>
        {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
        <AuthContext.Provider value={{ changeAuth, isAuth: false }}>
          {children}
        </AuthContext.Provider>
      </AlertContext.Provider>
    </QueryClientProvider>
  );
}
