import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { twMerge } from 'tailwind-merge';

type Theme = 'dark' | 'light' | 'danger' | 'outline' | 'link'

interface Props extends TouchableOpacityProps {
  theme?: Theme
  children: string
}

type ThemeStyles = {
  bg: string;
  text: string;
};

const themeClassName: { [key in Theme]: ThemeStyles } = {
  dark: {
    bg: 'bg-base-200',
    text: 'text-white'
  },
  light: {
    bg: 'bg-white',
    text: 'text-base-100'
  },
  danger: {
    bg: 'bg-red',
    text: 'text-white'
  },
  outline: {
    bg: 'border border-gray',
    text: 'text-white'
  },
  link: {
    bg: '',
    text: 'text-white'
  },
}

export default function Button(
  { theme = 'light', children, className: _cls, ...reset }: Props
) {
  return (
    <TouchableOpacity
      {...reset}
      className={twMerge(
        'flex items-center justify-center rounded-full px-4 py-3 flex-row',
        themeClassName[theme].bg
      )}
    >
      <Text className={twMerge(
        'text-sm text-center font-midnight-sans-st-36',
        themeClassName[theme].text
      )}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}