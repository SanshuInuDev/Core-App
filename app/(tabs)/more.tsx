import { Image, View } from 'react-native';

export default function More() {
  return (
    <View >
      <View className='mt-4 ml-4'>
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