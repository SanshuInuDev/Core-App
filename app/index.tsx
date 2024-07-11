import Button from "@/components/common/Button";
import Portfolio from "@/components/onboarding/Portfolio";
import WatchAddress from "@/components/onboarding/WatchAddress";
import Watchlists from "@/components/onboarding/Watchlists";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { View } from "react-native";

const Steps = [
  <Watchlists />,
  <Portfolio />,
  <WatchAddress />
]

export default function Page() {
  const [step, setStep] = useState<number>(0)

  const onSkip = useCallback(() => {
    router.push('/market')
  }, [])

  const onStep = useCallback(() => {
    if (step === 2) {
      onSkip()
      return
    }
    setStep(prev => prev + 1)
  }, [step])

  return (
    <View className="flex-1 px-6 pb-8 bg-base-100 pt-9">
      {
        Steps[step]
      }
      <View>
        <Button
          onPress={onStep}
        >
          Continue
        </Button>
        <Button
          className="mt-2"
          theme="link"
          onPress={onSkip}
        >
          Skip
        </Button>
      </View>
    </View>
  )
}