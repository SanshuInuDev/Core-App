import useAppProvider from "@/hooks/useAppProvider"
import { useWalletConnectModal } from "@walletconnect/modal-react-native"
import { useCallback, useEffect } from "react"
import { createWalletClient, custom } from "viem"
import { mainnet } from "viem/chains"

export function useWalletAuth() {
  const { open, isConnected, provider, address } = useWalletConnectModal()
  const { setAddress } = useAppProvider()
  console.log(address)
  useEffect(() => {
    if (address) {
      setAddress(address)
    }
  }, [address])

  const disconnect = useCallback(async () => {
    if (isConnected && provider) {
      provider.disconnect()
      setAddress(null)
    }
  }, [isConnected, provider, address])

  const walletOpen = useCallback(async () => {
    try {
      await open();
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
