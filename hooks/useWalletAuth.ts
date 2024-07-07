import useAppProvider from "@/hooks/useAppProvider"
import { useWalletConnectModal } from "@walletconnect/modal-react-native"
import { useCallback, useEffect } from "react"
import { SheetManager } from "react-native-actions-sheet"

export function useWalletAuth() {
  const { open, isConnected, provider, address } = useWalletConnectModal()
  const { setAddress } = useAppProvider()
  useEffect(() => {
    if (address)
      setAddress(address)
  }, [address])

  const disconnect = useCallback(async () => {
    if (isConnected && provider) {
      provider.disconnect()
      setAddress(undefined)
    }
  }, [isConnected, provider])

  const walletOpen = useCallback(async () => {
    try {
      await open();
      await SheetManager.hide('login-sheet')
    } catch (error) {
      console.error(error)
    }
  }, [])

  return {
    walletOpen,
    provider,
    disconnect,
    address
  }
}

export default useWalletAuth;
