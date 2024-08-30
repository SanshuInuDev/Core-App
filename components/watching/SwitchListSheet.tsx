import AppSheet from "@/components/AppSheet";
import Button from "@/components/common/Button";
import SheetCloseButton from "@/components/common/SheetCloseButton";
import Colors from "@/lib/Colors";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { ScrollView, SheetManager, SheetProps } from "react-native-actions-sheet";
import RadixIcon from "../RadixIcon";


export default function SwitchList(props: SheetProps<"watching-switch-list-sheet">) {
  return (
    <AppSheet>
      <View className='h-full'>
        <View className='flex-row items-center pb-6'>
          <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>
            Watchlists
          </Text>
          <SheetCloseButton id='watching-switch-list-sheet' />
        </View>
        <ScrollView>
          {
            props.payload?.map(item => (
              <TouchableOpacity
                className="flex-1 mb-2"
                key={item.id}
                onPress={() => {
                  SheetManager.hide('watching-switch-list-sheet', {
                    payload: item
                  })
                }}
              >
                <View className="flex-row items-center p-4 border rounded-3xl border-gray">
                  <View className="">
                    <View className="flex-row">
                      <Image
                        source={require('@/assets/images/bitcoin.png')}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <Image
                        source={require('@/assets/images/Ethereum.png')}
                        width={24}
                        height={24}
                        className="rounded-full ml-[-8] border-base-100"
                      />
                    </View>
                    <Text className="absolute justify-center w-8 h-5 mt-4 ml-1 text-xs text-center text-white rounded-full bg-base-200 font-midnight-sans-st-36">
                      + 2
                    </Text>
                  </View>
                  <Text className="flex-1 ml-2 text-sm text-white font-midnight-sans-st-36">
                    {item.title}
                  </Text>
                  <RadixIcon name="caret-right" color={Colors.white} />
                </View>
              </TouchableOpacity>
            ))
          }

        </ScrollView>
        <Button
          onPress={async () => {
            await SheetManager.hide('watching-switch-list-sheet')
            await SheetManager.show('watching-add-list-sheet')
          }}
          className='w-full mt-4 mb-6'
        >
          Continue
        </Button>
      </View>
    </AppSheet>
  )
}