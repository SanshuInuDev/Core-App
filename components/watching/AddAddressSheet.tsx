import AppSheet from "@/components/AppSheet";
import Button from "@/components/common/Button";
import SheetCloseButton from "@/components/common/SheetCloseButton";
import Colors from "@/lib/Colors";
import { Text, TextInput, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

export default function AddAddressSheet() {
  return (
    <AppSheet>
      <View className='h-full'>
        <View className='flex-row items-center pb-6'>
          <Text className='flex-1 text-white text-5 font-midnight-sans-st-36'>Watchlists</Text>
          <SheetCloseButton id='watching-add-address-sheet' />
        </View>
        <TextInput
          placeholderTextColor={Colors.gray}
          placeholder="/ Address, domain or identity "
          className="h-12 px-4 py-2 mb-6 text-white border rounded-full border-gray" />
        <Text className="flex-1 text-gray font-midnight-sans-st-36" >
          Search or paste an address, domain, or identity to start watching a wallet
        </Text>
        <Button
          onPress={() => {
            SheetManager.hide('watching-add-address-sheet')
          }}
          className='w-full mt-4 mb-6'
        >
          Continue
        </Button>
      </View>
    </AppSheet>
  )
}