import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {DefaultTheme} from 'styled-components/native';

interface GoBackIconProps extends SvgProps {
  style?: DefaultTheme;
  fillPath?: string;
}

const GoBackIcon = (props: GoBackIconProps) => {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16" {...props}>
      <Path
        d="M8.70718 1.70718C9.09769 1.31656 9.09769 0.683502 8.70718 0.292877C8.31656 -0.0976257 7.6835 -0.0976257 7.29288 0.292877L0.292877 7.29288C-0.0976257 7.6835 -0.0976257 8.31656 0.292877 8.70718L7.29288 15.7072C7.6835 16.0977 8.31656 16.0977 8.70718 15.7072C9.09769 15.3166 9.09769 14.6835 8.70718 14.2929L3.41422 9.00003H17C17.5523 9.00003 18 8.55228 18 8.00003C18 7.44778 17.5523 7.00003 17 7.00003H3.41422L8.70718 1.70718Z"
        fill={props.fillPath ? props.fillPath : '#72A8BC'}
      />
    </Svg>
  );
};

export default GoBackIcon;
