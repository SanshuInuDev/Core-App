import { WalletConnectModal } from "@walletconnect/modal-react-native"

const walletConnectProjectId = process.env.EXPO_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? 'Your wallet connect project ID'

const providerMetadata = {
  name: 'truepartner312',
  description: 'sanshu',
  url: 'https://sanshu.com',
  icons: ['https://sanshu.com'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

export default function WalletAuthModal() {
  return (
    <WalletConnectModal
      accentColor='#141414'
      themeMode='dark'
      projectId={walletConnectProjectId}
      providerMetadata={providerMetadata}
    />
  )
}