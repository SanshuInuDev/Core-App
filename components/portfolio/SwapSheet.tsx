import BackButton from "@/components/common/BackButton";
import SheetCloseButton from "@/components/common/SheetCloseButton";
import Colors from "@/lib/Colors";
import { TokenInfo } from "@/lib/types";
import { Web3Provider } from '@ethersproject/providers';
import { ChainId, CoinKey } from "@lifi/sdk";
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { Contract, ethers } from 'ethers';
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { RouteScreenProps, SheetManager } from "react-native-actions-sheet";
import { erc20Abi } from "viem";
import AppSheet from "../AppSheet";
import RadixIcon from "../RadixIcon";
import Button, { IconButton } from "../common/Button";


const SwapContext = createContext<{
  amount: number,
  setAmount: React.Dispatch<React.SetStateAction<number>>,
  fromToken: TokenInfo | null,
  setFromToken: React.Dispatch<React.SetStateAction<TokenInfo | null>>,
  toToken: TokenInfo | null,
  setToToken: React.Dispatch<React.SetStateAction<TokenInfo | null>>,
}>({
  amount: 0,
  setAmount: () => { },
  toToken: null,
  setToToken: () => { },
  fromToken: null,
  setFromToken: () => { }
});

const useSwap = () => useContext(SwapContext);

function InputAmount({ router }: RouteScreenProps<"portfolio-swap-sheet", "input">) {
  const { amount, setAmount, fromToken, toToken, setFromToken, setToToken } = useSwap()

  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <Text className='text-white text-5 font-midnight-sans-st-36'>
          Swap & Bridge
        </Text>
        <SheetCloseButton id='portfolio-swap-sheet' />
      </View>
      <View className='flex-1'>
        <View className="pb-4">
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <TextInput
                defaultValue="0"
                keyboardType="decimal-pad"
                value={amount.toString()}
                onChangeText={txt => setAmount(parseInt(txt))}
                className="text-2xl text-white font-midnight-sans-st-36"
              />
              <Text className="ml-1 text-2xl text-gray font-midnight-sans-st-36">
                USDT
              </Text>
            </View>
            <View className="flex-row items-center justify-center px-3 py-2.5 rounded-full bg-base-200">
              <Image
                source={{
                  uri: 'https://logo.moralis.io/0x1_0xdac17f958d2ee523a2206206994597c13d831ec7_3282f332c2ac2948929f01fe7d921c51',
                  width: 24,
                  height: 24
                }}
              />
              <Text className="mx-1 text-sm text-white font-midnight-sans-rd-36">
                USDT
              </Text>
              <RadixIcon name="caret-down" color={Colors.white} />
            </View>
          </View>
          <View className="flex-row justify-between mt-4">
            <Text className="text-sm text-gray font-midnight-sans-st-36">
              $0.00
            </Text>
            <Text className="text-sm text-gray font-midnight-sans-st-36">
              Balance: 2.5 ETH
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-center my-4 border-b border-gray">
          <View className="items-center justify-center w-8 h-8 border rounded-full mb-[-16] bg-base-100 border-gray">
            <RadixIcon name="arrow-down" color={Colors.white} />
          </View>
        </View>
        <View className="pt-4">
          <View className="flex-row justify-between">
            <View className="flex-row items-center">
              <TextInput
                defaultValue="0"
                className="text-2xl text-white font-midnight-sans-st-36"
              />
              <Text className="ml-1 text-2xl text-gray font-midnight-sans-st-36">
                USDC
              </Text>
            </View>
            <View className="flex-row items-center justify-center px-3 py-2.5 rounded-full bg-base-200">
              <Image
                source={{
                  uri: 'https://logo.moralis.io/0x1_0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_ac01a87aaf98ddb0f349ee4ebe97f0d8',
                  width: 24,
                  height: 24
                }}
              />
              <Text className="mx-1 text-sm text-white font-midnight-sans-rd-36">
                USDC
              </Text>
              <RadixIcon name="caret-down" color={Colors.white} />
            </View>
          </View>
          <View className="flex-row justify-between mt-4">
            <Text className="text-sm text-gray font-midnight-sans-st-36">
              $0.00
            </Text>
          </View>
        </View>
      </View>
      <View className="pb-12">
        <View className="flex-row mb-4">
          <IconButton
            size="sm"
            theme="dark"
            icon={
              <RadixIcon
                name="target"
                size={16}
                color={Colors.white}
              />
            }
          >
            Use max
          </IconButton>
          <IconButton
            size="sm"
            theme="dark"
            className="ml-2"
            icon={
              <RadixIcon
                name="height"
                size={16}
                color={Colors.white}
              />
            }
          >
            USD
          </IconButton>
          <IconButton
            size="sm"
            theme="dark"
            className="ml-2"
            icon={
              <RadixIcon
                name="mixer-horizontal"
                size={16}
                color={Colors.white}
              />
            }
          >
            Slippage
          </IconButton>
        </View>
        <Button
          theme="dark"
          onPress={() => {
            router.navigate('review')
          }}
        >
          Review
        </Button>
      </View>
    </View>
  )
}

function Review({ router }: RouteScreenProps<"portfolio-swap-sheet", "review">) {
  // const { amount, setAmount, fromToken, toToken, setFromToken, setToToken } = useSwap()
  const { provider, address, isConnected } = useWalletConnectModal()
  const [client, setClient] = useState<Web3Provider>();

  useEffect(() => {
    if (isConnected && provider) {
      console.log(isConnected)
      const _client = new ethers.providers.Web3Provider(provider);
      console.log("_client", _client)
      setClient(_client);
    }
  }, [isConnected, provider]);

  const onSwap = useCallback(async () => {
    try {
      if (!provider)
        return
      const fromChain = ChainId.ETH;
      const fromToken = CoinKey.USDT;
      const toChain = ChainId.ETH;
      const toToken = CoinKey.USDC;
      const fromAmount = '1000000';
      const fromAdress = address!
      const getQuote = async (fromChain: number, toChain: number, fromToken: string, toToken: string, fromAmount: string, fromAddress: string) => {
        const result = await fetch(`https://li.quest/v1/quote?fromChain=${fromChain}&toChain=${toChain}&fromToken=${fromToken}&toToken=${toToken}&fromAddress=${fromAddress}&fromAmount=${fromAmount}`);
        return await result.json();
      }
      const quote = await getQuote(fromChain, toChain, fromToken, toToken, fromAmount, fromAdress);

      if (!client) {
        console.log(client)
        console.log('return')
        return;
      }

      const signer = client.getSigner();

      await checkAndSetAllowance(signer, quote.action.fromToken.address, quote.estimate.approvalAddress, fromAmount)

      const tx = await signer.sendTransaction(quote.transactionRequest);
      const result = await tx.wait();
    } catch (error) {
      console.error(error)
    }
  }, [client])

  const checkAndSetAllowance = async (wallet: ethers.providers.JsonRpcSigner, tokenAddress: string, approvalAddress: string, amount: string) => {
    // Transactions with the native token don't need approval
    if (tokenAddress === ethers.constants.AddressZero) {
      return
    }
    const erc20 = new Contract(tokenAddress, erc20Abi, wallet);
    const allowance = await erc20.allowance(await wallet.getAddress(), approvalAddress);
    if (allowance.lt(amount)) {
      const approveTx = await erc20.approve(approvalAddress, amount);
      await approveTx.wait();
    }
  }

  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <Text className='text-white text-5 font-midnight-sans-st-36'>
          Review swap
        </Text>
        <SheetCloseButton id='portfolio-swap-sheet' />
      </View>
      <View className='flex-1'>
        <View className="flex-row justify-between py-4 border-b border-gray">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            Swap
          </Text>
          <Text className="text-sm text-white font-midnight-sans-st-36">
            {1} {'USDC'}
          </Text>
        </View>
        <View className="flex-row justify-between py-4 border-b border-gray">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            1 USDC
          </Text>
          <Text className="text-sm text-white font-midnight-sans-st-36">
            0xf.de96
          </Text>
        </View>
        <View className="flex-row justify-between py-4 border-b border-gray">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            Network
          </Text>
          <Text className="text-sm text-white font-midnight-sans-st-36">
            Ethereum
          </Text>
        </View>
        <View className="flex-row justify-between py-4 border-b border-gray">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            Sanshu Fee
          </Text>
          <Text className="text-sm text-white font-midnight-sans-st-36">
            $1.50
          </Text>
        </View>
        <View className="flex-row justify-between py-4 border-b border-gray">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            Network Fee
          </Text>
          <View>
            <Text className="text-sm text-right text-white font-midnight-sans-st-36">
              $0.5789
            </Text>
            <Text className="mt-1 text-sm text-white font-midnight-sans-st-36">
              0.000125 ETH
            </Text>
          </View>
        </View>
        <Text className="mt-4 text-gray font-midnight-sans-rd-36">
          Crypto transfers are irreversible. Verify the wallet address and network carefully before proceeding with a transfer.
        </Text>
      </View>
      <View className="pb-12">
        <Button
          onPress={async () => {
            await onSwap()
            router.navigate('complete')
          }}
        >
          Submit
        </Button>
      </View>
    </View>
  )
}

function Complete({ router }: RouteScreenProps<"portfolio-swap-sheet", "complete">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <Text className='text-white text-5 font-midnight-sans-st-36'>
          Swap
        </Text>
        <SheetCloseButton id='portfolio-swap-sheet' />
      </View>
      <View className='items-center justify-center flex-1'>
        <View className="items-center justify-center w-8 h-8 rounded-full bg-[#172f2a]" >
          <RadixIcon name="check" color={Colors.green} />
        </View>
        <Text className="text-white font-midnight-sans-rd-36 text-5 mt-3.5">
          Swap confirmed
        </Text>
        <Text className="text-sm text-center text-gray font-midnight-sans-rd-36 mt-3.5">
          1 USDT to 1 USDC swap successful. You will receive a notification when your assets are deposited in your wallet.
        </Text>
      </View>
      <View className="pb-12">
        <Button
          onPress={() => {
            SheetManager.hide('portfolio-swap-sheet')
          }}
        >
          Go Home
        </Button>
        <Button
          theme="link"
          className="mt-6"
          onPress={() => {
            router.navigate('complete')
          }}
        >
          View on Etherscan
        </Button>
      </View>
    </View>
  )
}
export default function SendSheet() {
  const [fromToken, setFromToken] = useState<TokenInfo | null>(null)
  const [toToken, setToToken] = useState<TokenInfo | null>(null)
  const [amount, setAmount] = useState<number>(0)

  return (
    <SwapContext.Provider value={{
      fromToken, setFromToken,
      toToken, setToToken,
      amount, setAmount
    }}>
      <AppSheet
        routes={[
          { name: 'input', component: InputAmount },
          { name: 'review', component: Review },
          { name: 'complete', component: Complete }
        ]}
      >
        <View>
          Hello
        </View>
      </AppSheet>
    </SwapContext.Provider>
  )
}