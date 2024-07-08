import { createContext, useContext, useState } from "react"

export const AppContext = createContext<{
  address: string | null,
  setAddress: (address: string | null) => void,
  isAuthenticated: boolean
}>({
  address: null,
  setAddress: () => { },
  isAuthenticated: false
})

export interface AppProviderProps {
  children: React.ReactNode
}

export default function AppProvider(
  { children }: AppProviderProps
) {
  const [address, setAddress] = useState<string | null>(null)
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
