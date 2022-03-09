import React from 'react';
import styled from 'styled-components/native';

const PrayerInfo = () => {
  return (
    <Root>
      <LeftInfoItem>
        <MinifiedTitle>July 25 2017</MinifiedTitle>
        <Text>Date Added</Text>
        <TextBlue>Opened for 4 days</TextBlue>
      </LeftInfoItem>
      <InfoItem>
        <Title>123</Title>
        <Text>Times Prayed Total</Text>
      </InfoItem>
      <LeftInfoItem>
        <Title>63</Title>
        <Text>Times Prayed by Me</Text>
      </LeftInfoItem>
      <InfoItem>
        <Title>60</Title>
        <Text>Times Prayed by Others</Text>
      </InfoItem>
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  border-width: 1px;
  border-color: #e5e5e5;
  border-style: solid;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
`;

const InfoItem = styled.View`
  width: 50%;
  min-height: 108px;
  padding: 15px;
  padding-top: 26px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
`;

const LeftInfoItem = styled(InfoItem)`
  border-left-width: 0;
`;

const Title = styled.Text`
  font-size: 32px;
  line-height: 37px;
  color: #bfb393;
`;

const MinifiedTitle = styled(Title)`
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 6px;
`;

const Text = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #514d47;
`;

const TextBlue = styled.Text`
  color: #72a8bc;
`;

export default PrayerInfo;
