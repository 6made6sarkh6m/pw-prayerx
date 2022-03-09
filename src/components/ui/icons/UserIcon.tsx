import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface UserIconProps extends SvgProps {
  fillPath?: string;
}
function UserIcon(props: UserIconProps) {
  return (
    <Svg width={17} height={20} viewBox="0 0 17 20" fill="#72A8BC" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 0a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 116 0 3 3 0 01-6 0zM5 12a5 5 0 00-5 5v2a1 1 0 102 0v-2a3 3 0 013-3h7a3 3 0 013 3v2a1 1 0 102 0v-2a5 5 0 00-5-5H5z"
      />
    </Svg>
  );
}

export default UserIcon;
