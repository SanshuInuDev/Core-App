import AppSheet from '@/components/AppSheet';
import React from 'react';
import { View } from 'react-native';
import LoginProvider, { useLoginProvder } from './LoginProvider';
import MainPage from './MainPage';
import VerifyCompletePage from './VerifyCompletePage';
import VerifyPage from './VerifyPage';


export default function LoginSheet() {
  return (
    <AppSheet>
      <LoginProvider>
        <LoginPage />
      </LoginProvider>
    </AppSheet>
  );
}

const Pages = {
  MainPage: <MainPage />,
  VerifyPage: <VerifyPage />,
  VerifyCompletePage: <VerifyCompletePage />,
}

function LoginPage() {
  const { page } = useLoginProvder()
  return (
    Pages[page]
  )
}
