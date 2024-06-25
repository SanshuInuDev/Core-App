<<<<<<< HEAD
import { Image, View } from 'react-native';

export default function More() {
  return (
    <View >
      <View className='mt-4 ml-4'>
=======
import { Image, StyleSheet, View } from 'react-native';

export default function More() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
>>>>>>> ed3159b7d106a8718cc5dc9080f6a2746ed04823
        <Image
          source={require('@/assets/images/Logo.png')}
        />
        <Image
          source={require('@/assets/images/magnifying-glass.png')}
        />
      </View>
    </View>
  );
<<<<<<< HEAD
}
=======
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
>>>>>>> ed3159b7d106a8718cc5dc9080f6a2746ed04823
