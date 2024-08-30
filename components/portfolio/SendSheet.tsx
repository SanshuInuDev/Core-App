import AppSheet from "@/components/AppSheet";
import RadixIcon from "@/components/RadixIcon";
import BackButton from "@/components/common/BackButton";
import Button, { IconButton } from "@/components/common/Button";
import Input from "@/components/common/Input";
import SheetCloseButton from "@/components/common/SheetCloseButton";
import Colors from "@/lib/Colors";
import { ChainType, getTokens } from "@lifi/sdk";
import { createContext, useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import { RouteScreenProps } from "react-native-actions-sheet";
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { executeRoute, getRoutes } from '@lifi/sdk'
import useAppProvider from "@/hooks/useAppProvider";
import { createWalletClient, custom, parseEther } from 'viem'
import { mainnet } from 'viem/chains'
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { TokenInfo } from "@/lib/types";


const SendContext = createContext<{
  toAddress?: string,
  setToAddress: React.Dispatch<React.SetStateAction<string | undefined>>,
  amount: number,
  setAmount: React.Dispatch<React.SetStateAction<number>>,
  token?: TokenInfo,
  setToken: React.Dispatch<React.SetStateAction<TokenInfo | undefined>>,
}>({
  setToAddress: () => { },
  amount: 0,
  setAmount: () => { },
  setToken: () => { }
});

const useSend = () => useContext(SendContext);

function InputAddress({ router }: RouteScreenProps<"portfolio-send-sheet", "input">) {
  const { toAddress, setToAddress } = useSend();
  const { address } = useAppProvider()

  useEffect(() => {
    loadTokens()
  }, [])

  const loadTokens = async () => {
    try {
      const tokens = await getTokens({
        chainTypes: [ChainType.EVM],
      });
      // console.log("tokens.tokens", tokens.tokens);
    } catch (error) {
      console.error(error);
    }
  }
  
  const sendToken = async () => {
    try {

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <Text className='text-white text-5 font-midnight-sans-st-36'>
          Send
        </Text>
        <SheetCloseButton id='portfolio-send-sheet' />
      </View>
      <View className='flex-1'>
        <Input
          value={toAddress}
          onChangeText={setToAddress}
          placeholder='Address, DNS or identity'
        />
      </View>
      <View className="pb-12">
        <View className="flex-row mb-4">
          <IconButton
            size="sm"
            theme="dark"
            icon={
              <RadixIcon
                name="reader"
                size={16}
                color={Colors.white}
              />
            }
          >
            Address Book
          </IconButton>
          <IconButton
            size="sm"
            theme="dark"
            className="ml-2"
            icon={
              <RadixIcon
                name="corners"
                size={16}
                color={Colors.white}
              />
            }
          >
            Scan
          </IconButton>
          <IconButton
            size="sm"
            theme="dark"
            className="ml-2"
            icon={
              <RadixIcon
                name="clipboard-copy"
                size={16}
                color={Colors.white}
              />
            }
          >
            Paste
          </IconButton>
        </View>
        <Button
          disabled={!toAddress}
          theme="dark"
          onPress={() => {
            // router.navigate('select')
            sendToken()
          }}
        >
          Continue
        </Button>
      </View>
    </View>
  )
}

const local_data = [
  {
    value: '1',
    lable: 'Country 1',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '2',
    lable: 'Country 2',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '3',
    lable: 'Country 3',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '4',
    lable: 'Country 4',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
  {
    value: '5',
    lable: 'Country 5',
    image: {
      uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
    },
  },
];

function InputAmount({ router }: RouteScreenProps<"portfolio-send-sheet", "select">) {
  const { amount, setAmount } = useSend()
  const [country, setCountry] = useState<string>('')
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <Text className='text-white text-5 font-midnight-sans-st-36'>
          Send
        </Text>
        <SheetCloseButton id='portfolio-send-sheet' />
      </View>
      <View className='flex-1'>
        <View className="flex-row justify-between">
          <View className="flex-row items-center">
            <TextInput
              keyboardType="decimal-pad"
              defaultValue="0"
              value={amount.toString()}
              onChangeText={txt => setAmount(Number(txt))}
              className="text-2xl text-white font-midnight-sans-st-36"
            />
            <Text className="ml-1 text-2xl text-gray font-midnight-sans-st-36">
              ETH
            </Text>
          </View>
          <View>
            <SelectCountry
              style={styles.dropdown}
              selectedTextStyle={styles.selectedTextStyle}
              placeholderStyle={styles.placeholderStyle}
              imageStyle={styles.imageStyle}
              iconStyle={styles.iconStyle}
              maxHeight={200}
              value={country}
              data={local_data}
              valueField="value"
              labelField="lable"
              imageField="image"
              placeholder="Select country"
              searchPlaceholder="Search..."
              onChange={e => {
                setCountry(e.value);
              }}
            />
          </View>
          {/* <View className="flex-row items-center justify-center px-3 py-2.5 rounded-full bg-base-200">
            <Image
              source={require('@/assets/images/Ethereum.png')}
            />
            <Text className="mx-1 text-sm text-white font-midnight-sans-rd-36">
              ETH
            </Text>
            <RadixIcon name="caret-down" color={Colors.white} />
          </View> */}
        </View>
        <View className="flex-row justify-between mt-6">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            $0.00
          </Text>
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            Balance: 2.5 ETH
          </Text>
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
            Usd
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

function Review({ router }: RouteScreenProps<"portfolio-send-sheet", "review">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <Text className='text-white text-5 font-midnight-sans-st-36'>
          Send
        </Text>
        <SheetCloseButton id='portfolio-send-sheet' />
      </View>
      <View className='flex-1'>
        <View className="flex-row justify-between py-4 border-b border-gray">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            From
          </Text>
          <Text className="text-sm text-white font-midnight-sans-st-36">
            0xf.de96
          </Text>
        </View>
        <View className="flex-row justify-between py-4 border-b border-gray">
          <Text className="text-sm text-gray font-midnight-sans-st-36">
            Address
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
          onPress={() => {
            router.navigate('complete')
          }}
        >
          Submit
        </Button>
      </View>
    </View>
  )
}

function Complete({ router }: RouteScreenProps<"portfolio-send-sheet", "complete">) {
  return (
    <View className='h-full'>
      <View className='flex-row items-center justify-between pb-6'>
        <BackButton
          onPress={() => {
            router.goBack()
          }}
        />
        <Text className='text-white text-5 font-midnight-sans-st-36'>
          Send
        </Text>
        <SheetCloseButton id='portfolio-send-sheet' />
      </View>
      <View className='items-center justify-center flex-1'>
        <View className="items-center justify-center w-8 h-8 rounded-full bg-[#172f2a]" >
          <RadixIcon name="check" color={Colors.green} />
        </View>
        <Text className="text-white font-midnight-sans-rd-36 text-5 mt-3.5">
          Send Ethereum confirmed
        </Text>
        <Text className="text-sm text-gray font-midnight-sans-rd-36 mt-3.5">
          1 ETH to 3,500 USDC swap successful. You will receive a notification when your assets are deposited in your wallet.
        </Text>
      </View>
      <View className="pb-12">
        <Button
          onPress={() => {
            router.navigate('complete')
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
  const [toAddress, setToAddress] = useState<string | undefined>(undefined)
  const [amount, setAmount] = useState<number>(0)
  const [token, setToken] = useState<TokenInfo | undefined>(undefined)
  return (
    <SendContext.Provider value={{
      toAddress, setToAddress,
      amount, setAmount,
      token, setToken
    }}>
      <AppSheet
        routes={[
          { name: 'input', component: InputAddress },
          { name: 'select', component: InputAmount },
          { name: 'review', component: Review },
          { name: 'complete', component: Complete }
        ]}
      />
    </SendContext.Provider>
  )
}



const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 150,
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});