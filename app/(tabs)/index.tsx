import Colors from '@/constants/Colors';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/Logo.png')}
        />
        <Image
          source={require('@/assets/images/magnifying-glass.png')}
        />
      </View>
      <View style={styles.spacer} />
      <View>
        <Text style={styles.mainTitle}>Market</Text>
        <View style={styles.mainTitleDes}>
          <Text style={styles.mainTitleDesLeft}>Global Market Cap </Text>
          <Text style={styles.mainTitleDesRight}> $2.38T (0.03%) </Text>
        </View>
      </View>
      <View style={styles.spacer} />
      <View>
        <Text style={styles.subTitle}>Featured dApps</Text>
        <View style={styles.dappList}>
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
        </View>
      </View>
      <View style={styles.spacer} />
      <View>
        <Text style={styles.subTitle} >Top Movers </Text>
        <View style={styles.moverList}>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/bitcoin.png')}
            />
            <Text style={styles.dappTitle}>Bitcoin</Text>
            <Text style={styles.moverPrice}>$68,678.61</Text>
            <Text style={styles.moverRate}>2.54%</Text>
          </View>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/Ethereum.png')}
            />
            <Text style={styles.dappTitle}>Ethereum</Text>
            <Text style={styles.moverPrice}>$1,678.61</Text>
            <Text style={styles.moverRate}>3.54%</Text>
          </View>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/Atops.png')}
            />
            <Text style={styles.dappTitle}>Atops</Text>
            <Text style={styles.moverPrice}>$1.01</Text>
            <Text style={styles.moverRate}>0.04%</Text>
          </View>
          <View style={styles.moverItem}>
            <Image
              source={require('@/assets/images/Doge.png')}
            />
            <Text style={styles.dappTitle}>Bitcoin</Text>
            <Text style={styles.moverPrice}>$68,678.61</Text>
            <Text style={styles.moverRate}>2.54%</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    backgroundColor: Colors.light.background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  spacer: {
    height: 32
  },
  mainTitle: {
    color: Colors.light.text,
    fontSize: 30
  },
  mainTitleDes: {
    flexDirection: 'row',
  },
  mainTitleDesLeft: {
    color: Colors.light.text
  },
  mainTitleDesRight: {
    color: '#79D64D'
  },
  subTitle: {
    color: Colors.light.text,
    fontSize: 20
  },
  dappList: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 24
  },
  dappTitle: {
    marginTop: 8,
    color: Colors.light.text,
  },
  dappItem: {
    alignItems: 'center'
  },
  moverList: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 8
  },
  moverItem: {
    minWidth: 70
  },
  moverPrice: {
    color: Colors.light.text,
    opacity: 0.4
  },
  moverRate: {
    color: '#79D64D'
  }
});
