import useAppProvider from "@/hooks/useAppProvider";
import { PortfolioNft } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { View, Text, Image } from "react-native";

type Props = {
  address: string
}
export default function NftPannel({
  address
}: Props) {
  const { data } = useQuery({
    queryKey: [`portfolio-nft-${address}`],
    queryFn: async () => {
      const response = await fetch(process.env.EXPO_PUBLIC_SERVER_URL + '/api/v1/portfolio/nft/' + address)
      return await response.json() as PortfolioNft[]
    }
  })
  if (data?.length)
    return (
      <View>
        <Text className='text-white font-midnight-sans-st-36'>
          MFTs
        </Text>
        <View className='flex-row mt-4'>
          <View className='mr-2 border-4 rounded-lg flex-full border-base-200'>
            {
              data?.map(item => (
                <Image
                  key={item.token_address}
                  className='w-full'
                  source={{
                    uri: item.collection_logo
                  }}
                />
              ))
            }
          </View>
        </View>
      </View>
    )
  return
}