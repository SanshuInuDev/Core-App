import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type Page = 'VerifyPage' | 'VerifyCompletePage' | 'MainPage'

export const LoginContext = createContext<{
  page: Page;
  setPage: (page: Page) => void;
}>({
  page: 'MainPage',
  setPage: () => { }  // Placeholder function, actual implementation will depend on your app structure
})

export const useLoginProvder = () => useContext(LoginContext)

export default function LoginProvider({
  children
}: Props) {
  const [page, setPage] = useState<Page>('MainPage')
  return (
    <LoginContext.Provider value={{
      page,
      setPage
    }}>
      {children}
    </LoginContext.Provider>
  )
}