import ScreenInfo from '@/components/ScreenInfo';
import Colors from '@/lib/Colors';
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Iconify } from 'react-native-iconify';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/Logo.png')}
        />
        <Iconify icon="radix-icons:magnifying-glass" size={20} color={'white'} />
      </View>
      <View className='h-8' />
      <View>
        <Text style={styles.mainTitle} className='font-Midnight'>Market</Text>
        <View style={styles.mainTitleDes}>
          <Text style={styles.mainTitleDesLeft}>Global Market Cap </Text>
          <Text style={styles.mainTitleDesRight}> $2.38T (0.03%) </Text>
        </View>
      </View>
      <View className='h-8' />
      <View>
        <Text style={styles.subTitle}>Featured dApps</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dappList}>
          <View style={styles.dappItem}>
            <Image
              source={require('@/assets/images/zora.png')}
            />
            <Text style={styles.dappTitle}>Zora</Text>
          </View>
          <View style={styles.dappItem}>
            <Image
              source={require('@/assets/images/Crypto.png')}
            />
            <Text style={styles.dappTitle}>Galve</Text>
          </View>
          <View style={styles.dappItem}>
            <Image
              source={require('@/assets/images/OpenSea.png')}
            />
            <Text style={styles.dappTitle}>OpenSea</Text>
          </View>
          <View style={styles.dappItem}>
            <Image
              source={require('@/assets/images/Element.png')}
            />
            <Text style={styles.dappTitle}>Element</Text>
          </View>
          <View style={styles.dappItem}>
            <Image
              source={require('@/assets/images/Jumper.png')}
            />
            <Text style={styles.dappTitle}>Jumper</Text>
          </View>
        </ScrollView>
      </View>
      <View className='h-8' />
      <View>
        <Text style={styles.subTitle} >Top Movers</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.moverList}>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/bitcoin.png')}
            />
            <Text style={styles.dappTitle}>Bitcoin</Text>
            <Text style={styles.moverPrice}>$68,678.61</Text>
            <View className='flex-row'>
              <Iconify icon="radix-icons:triangle-down" size={20} color={Colors.green} />
              <Text style={styles.moverRate}>2.54%</Text>
            </View>
          </View>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/Ethereum.png')}
            />
            <Text style={styles.dappTitle}>Ethereum</Text>
            <Text style={styles.moverPrice}>$1,678.61</Text>
            <View className='flex-row'>
              <Iconify icon="radix-icons:triangle-down" size={20} color={Colors.green} />
              <Text style={styles.moverRate}>3.54%</Text>
            </View>
          </View>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/Atops.png')}
            />
            <Text style={styles.dappTitle}>Atops</Text>
            <Text style={styles.moverPrice}>$1.01</Text>
            <View className='flex-row'>
              <Iconify icon="radix-icons:triangle-down" size={20} color={Colors.green} />
              <Text style={styles.moverRate}>0.04%</Text>
            </View>
          </View>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/Doge.png')}
            />
            <Text style={styles.dappTitle}>Bitcoin</Text>
            <Text style={styles.moverPrice}>$68,678.61</Text>
            <View className='flex-row'>
              <Iconify icon="radix-icons:triangle-down" size={20} color={Colors.green} />
              <Text style={styles.moverRate}>2.54%</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className='h-8' />
      <View className='flex-row'>
        <Text className='flex-1' style={styles.subTitle}>Discover</Text>
        <Pressable>
          <View className='flex-row gap-1 bg-base200 px-4 py-2 rounded-full'>
            <Text className='text-white'>More</Text>
            <Iconify icon='radix-icons:arrow-right' size={20} color={'white'} />
          </View>
        </Pressable>
      </View>
      <View className='mt-4'>
        {
          [
            { name: 'Bitcoin', shortName: 'BTC', price: '$68,903.50', rate: '2.54' },
            { name: 'Ethereum ', shortName: 'ETH', price: '$68,903.50', rate: '2.54' },
            { name: 'USD Coin', shortName: 'USDC', price: '$68,903.50', rate: '2.54' },
            { name: 'DOGE Coin', shortName: 'DOGE', price: '$68,903.50', rate: '2.54' },
            { name: 'Polkadot', shortName: 'DOT', price: '$68,903.50', rate: '2.54' },
            { name: 'Arbitrum', shortName: 'ARB', price: '$68,903.50', rate: '2.54' },
            { name: 'Bitcoin', shortName: 'BTC', price: '$68,903.50', rate: '2.54' },
            { name: 'Bitcoin', shortName: 'BTC', price: '$68,903.50', rate: '2.54' },
            { name: 'Bitcoin', shortName: 'BTC', price: '$68,903.50', rate: '2.54' },
            { name: 'Bitcoin', shortName: 'BTC', price: '$68,903.50', rate: '2.54' },
          ].map((item, idx) => (
            <View key={idx} className='border-b py-4 border-gray flex-row items-center gap-2'>
              <Text className='text-gray'>{idx + 1}</Text>
              <Image source={require('@/assets/images/bitcoin.png')} />
              <View className='flex-1'>
                <Text className='text-white'>{item.name}</Text>
                <Text className='text-gray'>{item.shortName}</Text>
              </View>
              <View >
                <Text className='text-white'>{item.price}</Text>
                <Text className='text-green text-right'>{item.rate}%</Text>
              </View>
            </View>
          ))
        }
      </View>
      <View className='h-8' />
      <View className='flex-row'>
        <Text className='flex-1' style={styles.subTitle}>Latest in crypto</Text>
        <Pressable>
          <View className='flex-row gap-1 bg-base200 px-4 py-2 rounded-full'>
            <Text className='text-white'>More</Text>
            <Iconify icon='radix-icons:arrow-right' size={20} color={'white'} />
          </View>
        </Pressable>
      </View>
      <View className='mt-4'>
        {
          [
            { siteName: 'Coindesk', item: '1hr', title: 'Bitcoin is still strong, but Macro Factors pose risk, Crypto analyst says.' },
            { siteName: 'Coindesk', item: '1hr', title: 'Bitcoin is still strong, but Macro Factors pose risk, Crypto analyst says.' },
            { siteName: 'Coindesk', item: '1hr', title: 'Bitcoin is still strong, but Macro Factors pose risk, Crypto analyst says.' },
          ]
            .map((item, idx) => (
              <View key={idx} className='border-b py-4 border-gray flex-row items-end'>
                <View className='gap-2 flex-1'>
                  <View className='flex-row gap-1'>
                    <Text className='text-white'>{item.siteName}</Text>
                    <Text className='text-gray'>{item.item}</Text>
                  </View>
                  <Text className='text-white leading-8'>{item.title}</Text>
                </View>
                <Image source={require('@/assets/images/blog.png')} />
              </View>
            ))
        }
      </View>

      <View className='h-8' />
      <View className='flex-row'>
        <Text className='flex-1' style={styles.subTitle}>Trending on social</Text>
      </View>
      <View className='mt-4'>
        {
          [
            { siteName: 'Coindesk', item: '1hr', title: 'Can’t believe i waited this long. It’s finally here!', author: '@maninthearena' },
            { siteName: 'Coindesk', item: '1hr', title: 'Something special is about to happen.', author: '@0XCryptoChamp' },
            { siteName: 'Coindesk', item: '1hr', title: 'This project will be huge 🚀🚀🚀', author: '@Onchaindesigner' },
          ]
            .map((item, idx) => (
              <View key={idx} className='border-b py-4 border-gray flex-row items-end'>
                <View className='gap-2 flex-1'>
                  <View className='flex-row gap-1'>
                    <Text className='text-white'>{item.siteName}</Text>
                    <Text className='text-gray'>{item.item}</Text>
                  </View>
                  <View>
                    <Text className='text-white leading-8'>{item.title}</Text>
                    <Text className='text-gray'>{item.author}</Text>
                  </View>
                </View>
                <Image source={require('@/assets/images/blog.png')} />
              </View>
            ))
        }
      </View>
      <View className='h-32' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    backgroundColor: Colors.base100
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainTitle: {
    color: Colors.white,
    fontSize: 30
  },
  mainTitleDes: {
    flexDirection: 'row',
  },
  mainTitleDesLeft: {
    color: Colors.white
  },
  mainTitleDesRight: {
    color: '#79D64D'
  },
  subTitle: {
    color: Colors.white,
    fontSize: 20
  },
  dappList: {
    marginTop: 16,
    flexDirection: 'row'
  },
  dappTitle: {
    marginTop: 8,
    color: Colors.white,
  },
  dappItem: {
    alignItems: 'center',
    marginRight: 24
  },
  moverList: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 8
  },
  moverItem: {
    minWidth: 70,
    marginRight: 8
  },
  moverPrice: {
    color: Colors.white,
    opacity: 0.4
  },
  moverRate: {
    color: '#79D64D'
  },
  discoverTitleSection: {
    flexDirection: 'row'
  }
});
