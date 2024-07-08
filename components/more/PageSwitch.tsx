import { TouchableOpacity, View, Text } from "react-native"
import { twMerge } from "tailwind-merge"

type Props = {
  page?: "Login" | "Signup",
  setPage?: (page: "Login" | "Signup") => void
}

export default function PageSwitch({
  page = 'Login',
  setPage = () => { }
}: Props) {
  return (
    <View
      className='flex-row p-2 rounded-full bg-base-200'
    >
      <TouchableOpacity
        onPress={() => {
          setPage('Login')
        }}
        className={
          twMerge(
            'flex-1 px-3 py-2 rounded-full',
            page === 'Login' ? 'bg-white' : 'bg-base-200'
          )
        }
      >
        <Text
          className={
            twMerge(
              'text-sm text-center font-midnight-sans-st-36',
              page === 'Login' ? 'text-base-100' : 'text-white'
            )
          }
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setPage('Signup')
        }}
        className={
          twMerge(
            'flex-1 px-3 py-2 rounded-full',
            page === 'Signup' ? 'bg-white' : 'bg-base-200'
          )
        }>
        <Text
          className={
            twMerge(
              'text-sm text-center font-midnight-sans-st-36',
              page === 'Signup' ? 'text-base-100' : 'text-white'
            )
          }
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  )
}