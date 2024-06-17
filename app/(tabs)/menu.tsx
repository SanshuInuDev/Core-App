import { Image, StyleSheet, View } from 'react-native';

export default function Menu() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/Logo.png')}
        />
        <Image
          source={require('@/assets/images/magnifying-glass.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    backgroundColor: '#0D0512'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
