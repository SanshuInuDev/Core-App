import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { twMerge } from 'tailwind-merge';

type Theme = 'dark' | 'light' | 'danger' | 'outline' | 'link'

interface Props extends TouchableOpacityProps {
  theme?: Theme
  children: string | string[]
  size?: 'default' | 'sm' | 'lg'
}

type ThemeStyles = {
  bg: string;
  text: string;
};

const sizePadding = {
  default: 'px-4 py-3',
  sm: 'px-3 py-2',
  lg: 'px-4 py-3'
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

const sizes = {
  default: '',
  sm: 'text-sm',
  lg: 'text-lg',
}

export default function Button({
  theme = 'light',
  children,
  size = 'default',
  className: _cls,
  disabled,
  ...reset
}: Props) {
  return (
    <TouchableOpacity
      {...reset}
      disabled={disabled}
      className={twMerge(
        'flex items-center justify-center rounded-full flex-row ',
        themeClassName[theme].bg,
        sizePadding[size],
        disabled ? "bg-opacity-20 text-gray" : ""
      )}
    >
      <Text className={twMerge(
        'text-center font-midnight-sans-st-36',
        sizes[size],
        disabled ? 'text-gray' : themeClassName[theme].text
      )}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

interface IconButtonProps extends Props {
  icon: React.ReactElement
}

export function IconButton({
  theme = 'light',
  children,
  icon,
  size = 'default',
  className: _cls, ...reset
}: IconButtonProps) {
  return (
    <TouchableOpacity
      {...reset}
      className={twMerge(
        'flex items-center justify-center rounded-full flex-row',
        themeClassName[theme].bg,
        sizePadding[size]
      )}
    >
      <View className="flex-row items-center justify-center">
        {icon}
        <Text className={twMerge(
          'text-center font-midnight-sans-st-36',
          sizes[size],
          themeClassName[theme].text
        )}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

