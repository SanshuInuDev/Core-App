import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export type Page = 'VerifyPage' | 'VerifyCompletePage' | 'MainPage'

export const LoginContext = createContext<{
  page: Page;
  setPage: (page: Page) => void;
  reEmail: string
  setReEmail: (reEmail: string) => void;
}>({
  page: 'MainPage',
  setPage: () => { },
  reEmail: '',
  setReEmail: () => { }   // Reset the email state to an empty string when the component unmounts. This prevents any unwanted side effects from persisting between re-renders.
})

export const useLoginProvder = () => useContext(LoginContext)

export default function LoginProvider({
  children
}: Props) {
  const [page, setPage] = useState<Page>('MainPage')
  const [reEmail, setReEmail] = useState<string>('')
  return (
    <LoginContext.Provider value={{
      page,
      setPage,
      reEmail,
      setReEmail
    }}>
      {children}
    </LoginContext.Provider>
  )
}