
import { RadixIconName, RadixIcon as RdxIcon } from 'radix-ui-react-native-icons';

export interface RadixIconProps {
  name?: RadixIconName;
  size?: number;
  color?: string;
}

export default function RadixIcon(props: RadixIconProps) {
  return <RdxIcon {...props} />;
}