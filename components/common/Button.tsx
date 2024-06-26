import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { twMerge } from 'tailwind-merge';

type Theme = 'dark' | 'light' | 'danger'

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
  }
}

export default function Button(
  { theme = 'light', children, className: _cls, ...reset }: Props
) {
  return (
    <TouchableOpacity
      {...reset}
      className={twMerge(
        'flex items-center justify-center rounded-full px-4 py-3 flex-1',
        themeClassName[theme].bg
      )}
    >
      <Text
        className={twMerge(
          'font-midnight-sans-st-36 text-4 leading-6',
          themeClassName[theme].text
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}