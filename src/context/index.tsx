'use client';

import { usePathname } from 'next/navigation';
import React, { createContext, useLayoutEffect, useMemo, useState } from 'react';

type State = {
  isLogin: boolean;
  dataUser: any;
  userId: string;
  loginCheck: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const StateContext = createContext<State>({
  isLogin: false,
  dataUser: null,
  userId: '',
  loginCheck: () => {},
});

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [dataUser, _setDataUser] = useState();
  const [isLogin, _setIsLogin] = useState<boolean>(false);
  const [userId, _setUserId] = useState<string>('');

  const pathname = usePathname();
  const loginCheck = async () => {};

  useLayoutEffect(() => {
    if (pathname) {
      loginCheck();
    }
  }, [pathname]);
  const contextValue = useMemo(
    () => ({
      dataUser,
      isLogin,
      userId,
      loginCheck,
    }),
    [dataUser, isLogin, userId], // Only update when these dependencies change
  );
  return (
    <StateContext.Provider
      value={contextValue}
    >
      {children}
    </StateContext.Provider>
  );
};

export default AppProvider;
