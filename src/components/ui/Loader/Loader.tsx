import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {COLORS} from '../../../constants/colors';
interface ILoaderProps {
  isLoading: boolean;
}

const Loader = ({isLoading}: ILoaderProps) => {
  return (
    <ActivityIndicator
      size="large"
      color={COLORS.warmBeige}
      animating={isLoading}
    />
  );
};

export default Loader;
