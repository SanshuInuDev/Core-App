import AppSheet from '@/components/AppSheet';
import React, { useState } from 'react';
import { SheetProps } from 'react-native-actions-sheet';
import MainPage from './MainPage';
import VerifyPage from './VerifyPage';
import VerifyCompletePage from './VerifyCompletePage';
import LoginProvider, { useLoginProvder } from './LoginProvider';


export default function LoginSheet(props: SheetProps) {

  return (
    <AppSheet provider={props}>
      <LoginProvider>
        <LoginPage />
        {/* <VerifyPage /> */}

        {/* <MainPage /> */}
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
