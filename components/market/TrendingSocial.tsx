import { Image, Text, View } from "react-native";
import TrendingSocialItem, { SocialNews } from "./TrendingSocialItem";

const socialStaticNews: SocialNews[] = [
  { siteName: 'Coindesk', time: '1hr', title: 'Can’t believe i waited this long. It’s finally here!', author: '@maninthearena' },
  { siteName: 'Coindesk', time: '1hr', title: 'Something special is about to happen.', author: '@0XCryptoChamp' },
  { siteName: 'Coindesk', time: '1hr', title: 'This project will be huge 🚀🚀🚀', author: '@Onchaindesigner' },
]

export default function TrendingSocial() {

  return <View>
    <View className='flex-row items-center'>
      <Text className='flex-1 text-white text-5 font-midnight-sans-st-36' >Trending on social</Text>
    </View>
    <View className='mt-4'>
      {
        socialStaticNews.map((item, idx) => (
          <TrendingSocialItem key={idx} data={item} />
        ))
      }
    </View>
  </View>
}