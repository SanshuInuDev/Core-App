import AppSheet from '@/components/AppSheet';
import React, { useCallback, useEffect, useState } from 'react';
import Constants, { AppOwnership } from "expo-constants";
import {
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {
  ScrollView,
  SheetProps
} from 'react-native-actions-sheet';
import Auth0, { useAuth0 } from 'react-native-auth0';
import Button from '../common/Button';
import Input from '../common/Input';
import SheetCloseButton from '../common/SheetCloseButton';
import PasswordInput from './PasswordInput';
import * as Linking from "expo-linking";
import Web3Auth, { ChainNamespace, LOGIN_PROVIDER } from "@web3auth/react-native-sdk";
import Web3AuthSingleFactorAuth from '@web3auth/single-factor-auth-react-native';
import * as SecureStore from "expo-secure-store";
import * as WebBrowser from "expo-web-browser";
import { EthereumPrivKeyProviderConfig, EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
// import { createWeb3Modal, defaultConfig, Web3Modal } from '@web3modal/ethers-react-native'
import { ethers } from 'ethers';
// import { ConfigOptions } from '@web3modal/ethers-react-native/lib/typescript/utils/defaultConfig';

const projectId = 'e479133acb95ec1c5536d0a7e5faaa20'


// const modalOption: ConfigOptions = {
//   metadata: {
//     name: 'Web3Modal RN',
//     description: 'Web3Modal RN Example',
//     url: 'https://web3modal.com',
//     icons: ['https://avatars.githubusercontent.com/u/37784886'],
//     redirect: {
//       native: 'YOUR_APP_SCHEME://'
//     }
//   },
//   extraConnectors: []
// }

// const config = defaultConfig(modalOption)



const redirectUrl =
  //@ts-ignore
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("auth", {})
    : Linking.createURL("auth", { scheme: "com.truepartner312.sanshuapp" });

console.log(redirectUrl)

const chainConfig = {
  chainNamespace: ChainNamespace.EIP155,
  chainId: '0xaa36a7',
  rpcTarget: 'https://rpc.ankr.com/eth_sepolia',
  // Avoid using public rpcTarget in production.
  // Use services like Infura, Quicknode etc
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
  clientId: process.env.EXPO_PUBLIC_WEB3AUTH_CLIENT_ID ?? '',
  network: 'sapphire_devnet',
  redirectUrl: redirectUrl
});

const web3AuthSingleFactorAuth = new Web3AuthSingleFactorAuth(SecureStore, {
  clientId: process.env.EXPO_PUBLIC_WEB3AUTH_CLIENT_ID ?? '',
  web3AuthNetwork: 'sapphire_devnet',
  usePnPKey: false
})


const auth0 = new Auth0({
  domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN ?? 'YOUR_AUTH0_DOMAIN',
  clientId: process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID ?? 'YOUR_CLIENT_ID',
});


const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const polygon = {
  chainId: 137,
  name: 'Polygon',
  currency: 'MATIC',
  explorerUrl: 'https://polygonscan.com',
  rpcUrl: 'https://polygon-rpc.com'
}

const chains = [mainnet, polygon]


// createWeb3Modal({
//   projectId,
//   chains,
//   config,
//   enableAnalytics: true // Optional - defaults to your Cloud configuration
// })
export default function LoginSheet(props: SheetProps) {
  const [provider, setProvider] = useState<any>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const { getCredentials, sendEmailCode } = useAuth0();


  useEffect(() => {
    async function init() {
      await web3auth.init();
      await web3AuthSingleFactorAuth.init(ethereumPrivateKeyProvider);

      if (web3auth.privKey) {
        await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
        // IMP END - SDK Initialization
        setProvider(ethereumPrivateKeyProvider);
        setLoggedIn(true);
      }
    }
    init()
  }, [])


  const sLogin = async () => {
    await web3AuthSingleFactorAuth.connect({
      verifier: 'metamask',
      verifierId: 'sub',
      idToken: 'aaa'
    })
  }
  const login = async () => {
    try {
      if (!web3auth.ready) {
        console.log('Web3auth not initialized');
        return;
      }
      console.log('Logging in');
      // IMP START - Login
      await web3auth.login({
        loginProvider: LOGIN_PROVIDER.APPLE,
        redirectUrl: redirectUrl
        // extraLoginOptions: {
        //   login_hint: 'truepartner312@gmail.com',
        // },
      });
      if (web3auth.privKey) {
        await ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);
        // IMP END - Login
        setProvider(ethereumPrivateKeyProvider);
        console.log('Logged In');
        setLoggedIn(true);
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const getAccounts = async () => {
    if (!provider) {
      console.log('provider not set');
      return;
    }
    console.log('Getting account');
    // For ethers v5
    // const ethersProvider = new ethers.providers.Web3Provider(this.provider);
    const ethersProvider = new ethers.BrowserProvider(provider!);

    // For ethers v5
    // const signer = ethersProvider.getSigner();
    const signer = await ethersProvider.getSigner();

    // Get user's Ethereum public address
    const address = signer.getAddress();
    console.log(address);
  };

  const launchWalletServices = async () => {
    if (!web3auth) {
      console.log('Web3auth not initialized');
      return;
    }

    console.log('Launch Wallet Services');
    await web3auth.launchWalletServices(chainConfig);
  };

  const uiConsole = (...args: unknown[]) => {
    console.log(JSON.stringify(args || {}, null, 2) + '\n\n\n\n' + console);
  };


  const onLogin = useCallback(async () => {
    try {
      // await auth0.auth.createUser({
      //   connection: 'Username-Password-Authentication', // Use 'sms' for SMS-based OTP or 'email' for email-based OTP
      //   email: 'truepartner312@gmail.com', // Using phone number as email for demo
      //   // password: Math.random().toString(36).slice(-8), // Generate a random password
      //   password: 'asdFG@145220', // Generate a random password
      //   email_verified: false
      // });

      const response = await auth0.auth.passwordRealm({
        username: 'truepartner312@gmail.com',
        password: 'asdFG@145220',
        connection: 'email',
        realm: 'Username-Password-Authentication',
        scope: 'openid profile email'
      })
      if (response) {
        console.log('Logged in successfully', response);
        const userInfo = await auth0.auth.userInfo({ token: response.accessToken });
        const credentials = await auth0.credentialsManager.hasValidCredentials();
        console.log('user info', userInfo);
        console.log('credentials', credentials);
      }


      // await auth0.auth.passwordlessWithEmail({
      //   email: 'truepartner312@gmail.com',
      //   send: 'code',
      // });
      // console.log('OTP sent to email:', 'truepartner312@gmail.com');

    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <AppSheet provider={props}>
      {/* <Web3Modal /> */}
      <View className='flex-row items-center pb-6'>
        <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Welcome to Sanshu</Text>
        <SheetCloseButton id='login-sheet' />
      </View>
      <ScrollView className='pb-48'>
        <View className='pb-20'>
          <View
            className='flex-row p-2 rounded-full bg-base-200'
          >
            <TouchableOpacity className='flex-1 px-3 py-2 bg-white rounded-full '>
              <Text
                className='text-sm text-center text-base-100 font-midnight-sans-st-36'
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex-1 px-3 py-2 rounded-full '>
              <Text
                className='text-sm text-center text-white font-midnight-sans-st-36'
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <Input className='mt-6' placeholder='Enter your email address' />
          <View className='mt-6'>
            <PasswordInput />
          </View>
          <Button
            className='mt-6'
            onPress={login}
          >
            <Text className='leading-6 font-midnight-sans-st-36 text-4'>
              Login
            </Text>
          </Button>
          <View className='relative flex items-center mt-6 border-b border-gray'>
            <Text className='absolute px-2 mx-auto mt-[-8px] text-white font-midnight-sans-st-36 bg-base-100'>
              OR
            </Text>
          </View>
          <Button
            className='mt-6'
            theme='outline'
            onPress={getAccounts}
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
            onPress={launchWalletServices}
          >
            <Image
              className='mr-1'
              source={require('@/assets/images/apple.png')}
            />
            <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
              Continue with Apple
            </Text>
          </Button>
          <Button
            onPress={sLogin}
            className='mt-6'
            theme='outline'
          >
            <Image
              className='mr-1'
              source={require('@/assets/images/Exchanges.png')}
            />

            <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
              Continue with exchange
            </Text>
          </Button>
          <Button
            className='mt-6'
            theme='outline'
          >
            <Image
              className='mr-1'
              source={require('@/assets/images/Wallets.png')}
            />
            <Text className='leading-6 text-white font-midnight-sans-st-36 text-4'>
              Continue with Wallet
            </Text>
          </Button>
        </View>
      </ScrollView>
    </AppSheet>
  );
}

