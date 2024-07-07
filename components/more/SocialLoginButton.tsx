import useAppProvider from '@/hooks/useAppProvider';
import { EthereumPrivKeyProviderConfig, EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import Web3Auth, { ChainNamespace, LOGIN_PROVIDER, LOGIN_PROVIDER_TYPE } from "@web3auth/react-native-sdk";
import { ethers } from 'ethers';
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';
import Button from '../common/Button';

const redirectUrl =
  //@ts-ignore
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("auth", {})
    : Linking.createURL("auth", { scheme: "com.truepartner312.sanshuapp" });

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

export default function SocialLoginButton() {
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
        loginProvider: loginMode
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
        await SheetManager.hide('login-sheet')
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View>
      <Button
        className='mt-6'
        theme='outline'
        onPress={() => {
          login(LOGIN_PROVIDER.GOOGLE)
        }}
      >
        <Image
          className='w-6 h-6 mr-1'
          width={24}
          height={24}
          source={require('@/assets/images/google.png')}
        />
        <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
          Continue with Google
        </Text>
      </Button>
      <Button
        className='mt-6'
        theme='outline'
        onPress={() => {
          login(LOGIN_PROVIDER.APPLE)
        }}
      >
        <Image
          className='mr-1'
          source={require('@/assets/images/apple.png')}
        />
        <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
          Continue with Apple
        </Text>
      </Button>
    </View>
  )
}