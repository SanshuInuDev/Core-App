import { createContext, useContext, useState } from "react"

export const AppContext = createContext<{
  address: string | undefined,
  setAddress: (address: string | undefined) => void,
  isAuthenticated: boolean
}>({
  address: undefined,
  setAddress: () => { },
  isAuthenticated: false
})

export interface AppProviderProps {
  children: React.ReactNode
}

export default function AppProvider(
  { children }: AppProviderProps
) {
  const [address, setAddress] = useState<string | undefined>()
  return (
    <AppContext.Provider
      value={{
        address,
        setAddress,
        isAuthenticated: !!address
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
