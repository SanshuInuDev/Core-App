import useAppProvider from '@/hooks/useAppProvider';
import { EthereumPrivKeyProviderConfig, EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import Web3Auth, { ChainNamespace, LOGIN_PROVIDER_TYPE } from "@web3auth/react-native-sdk";
import { ethers } from 'ethers';
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import * as WebBrowser from "expo-web-browser";
import React, { createContext, useContext, useEffect } from 'react';

const redirectUrl =
  //@ts-ignore
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("more", {})
    : Linking.createURL("more", { scheme: "com.truepartner312.sanshuapp" });

console.log('- redirectUrl : ', redirectUrl)

const chainConfig = {
  chainNamespace: ChainNamespace.EIP155,
  chainId: '0xaa36a7',
  rpcTarget: 'https://rpc.ankr.com/eth_sepolia',
  displayName: 'Ethereum Sepolia Testnet',
  blockExplorerUrl: 'https://sepolia.etherscan.io',
  ticker: 'ETH',
  tickerName: 'Ethereum',
  decimals: 18,
  logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
};

const ethereumPrivateKeyProviderConfig: EthereumPrivKeyProviderConfig = {
  chainConfig
}

const ethereumPrivateKeyProvider = new EthereumPrivateKeyProvider({
  config: ethereumPrivateKeyProviderConfig
});

const web3auth = new Web3Auth(WebBrowser, SecureStore, {
  clientId: process.env.EXPO_PUBLIC_WEB3AUTH_CLIENT_ID ?? 'WEB3AUTH_CLIENT_ID',
  network: 'sapphire_devnet',
  redirectUrl: redirectUrl
});

const Web3AuthContext = createContext<{
  login: (loginMode: LOGIN_PROVIDER_TYPE) => Promise<void>,
  logout: () => Promise<void>
}>({
  login: async () => { },
  logout: async () => { }
})

export const useWeb3AuthProvider = () => useContext(Web3AuthContext)

type Props = {
  children: React.ReactNode;
}
export default function Web3AuthProvider({
  children
}: Props) {
  const { setAddress } = useAppProvider()

  useEffect(() => {
    async function init() {
      await web3auth.init();
      if (web3auth.privKey) {
        await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
        const ethersProvider = new ethers.BrowserProvider(ethereumPrivateKeyProvider);
        const signer = await ethersProvider.getSigner();
        const address = await signer.getAddress();
        setAddress(address)
      }
    }
    init()
  }, [])

  const login = async (loginMode: LOGIN_PROVIDER_TYPE) => {
    try {
      if (!web3auth.ready) {
        return;
      }
      await web3auth.login({
        loginProvider: loginMode,
        redirectUrl: redirectUrl,
      });

      if (web3auth.privKey) {
        await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
        const ethersProvider = new ethers.BrowserProvider(ethereumPrivateKeyProvider);

        // For ethers v5
        // const signer = ethersProvider.getSigner();
        const signer = await ethersProvider.getSigner();

        // Get user's Ethereum public address
        const address = await signer.getAddress();

        setAddress(address)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    if (!web3auth.ready) {
      return;
    }
    await web3auth.logout();

    if (!web3auth.privKey) {
      setAddress(null)
    }
  };

  return (
    <Web3AuthContext.Provider value={{ login, logout }}>
      {children}
    </Web3AuthContext.Provider>
  )
}