import React from 'react';
import styled from 'styled-components/native';

const PrayerInfo = () => {
  return (
    <Root>
      <LeftPrayerInfoItem>
        <MinifiedPrayerInfoTitle>July 25 2017</MinifiedPrayerInfoTitle>
        <PrayerInfoText>Date Added</PrayerInfoText>
        <PrayerInfoTextBlue>Opened for 4 days</PrayerInfoTextBlue>
      </LeftPrayerInfoItem>
      <PrayerInfoItem>
        <PrayerInfoTitle>123</PrayerInfoTitle>
        <PrayerInfoText>Times Prayed Total</PrayerInfoText>
      </PrayerInfoItem>
      <LeftPrayerInfoItem>
        <PrayerInfoTitle>63</PrayerInfoTitle>
        <PrayerInfoText>Times Prayed by Me</PrayerInfoText>
      </LeftPrayerInfoItem>
      <PrayerInfoItem>
        <PrayerInfoTitle>60</PrayerInfoTitle>
        <PrayerInfoText>Times Prayed by Others</PrayerInfoText>
      </PrayerInfoItem>
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

const PrayerInfoItem = styled.View`
  width: 50%;
  min-height: 108px;
  padding: 15px;
  padding-top: 26px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #e5e5e5;
`;

const LeftPrayerInfoItem = styled(PrayerInfoItem)`
  border-left-width: 0;
`;

const PrayerInfoTitle = styled.Text`
  font-size: 32px;
  line-height: 37px;
  color: #bfb393;
`;

const MinifiedPrayerInfoTitle = styled(PrayerInfoTitle)`
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 6px;
`;

const PrayerInfoText = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #514d47;
`;

const PrayerInfoTextBlue = styled.Text`
  color: #72a8bc;
`;

export default PrayerInfo;
