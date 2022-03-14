import React, {useState} from 'react';
import styled from 'styled-components/native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {IPrayer} from '../../../redux/ducks/prayers';
import {Dimensions} from 'react-native';
import {IPrayerItem, ISwipeData} from './PrayersList';
import {Button} from '../../ui';
import {COLORS} from '../../../constants/colors';

interface ICheckedPrayersProps {
  renderItem: (data: IPrayerItem) => JSX.Element;
  renderHiddenItem: () => JSX.Element;
  onSwipeValueChange: (swipeData: ISwipeData) => void;
  prayersData: IPrayer[];
}

const CheckedPrayers = ({
  renderItem,
  renderHiddenItem,
  onSwipeValueChange,
  prayersData,
}: ICheckedPrayersProps) => {
  const [isAppeared, setIsAppeared] = useState(false);

  const handleShowCheckedPrayers = () => {
    setIsAppeared(!isAppeared);
  };

  return (
    <>
      <StyledButton
        text={isAppeared ? 'Hide answered prayers' : 'Show answered prayers'}
        onPress={handleShowCheckedPrayers}
      />
      {isAppeared && (
        <SwipeListView
          disableRightSwipe
          data={prayersData.filter(item => item.checked)}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-Dimensions.get('window').width}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          onSwipeValueChange={onSwipeValueChange}
          useNativeDriver={true}
          keyExtractor={(item: IPrayer) => item.id.toString()}
        />
      )}
    </>
  );
};

const StyledButton = styled(Button)`
  padding: 8px 17px;
  background: ${COLORS.warmBeige};
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(66, 78, 117, 0.1);
`;

export default CheckedPrayers;
