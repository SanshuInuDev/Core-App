import { Image, View } from 'react-native';

export default function Portfolio() {
  return (
    <View>
      <View>
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
