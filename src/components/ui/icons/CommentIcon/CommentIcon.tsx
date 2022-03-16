import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {DefaultTheme} from 'styled-components/native';

interface ICommentIconProps extends SvgProps {
  style?: DefaultTheme;
}

function CommentIcon(props: ICommentIconProps) {
  return (
    <Svg width={22} height={22} fill="#BFB393" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2a1 1 0 00-1 1v13.586l2.293-2.293A1 1 0 015 14h12a1 1 0 001-1V3a1 1 0 00-1-1H3zM.879.879A3 3 0 013 0h14a3 3 0 013 3v10a3 3 0 01-3 3H5.414l-3.707 3.707A1 1 0 010 19V3A3 3 0 01.879.879z"
      />
    </Svg>
  );
}

export default CommentIcon;
