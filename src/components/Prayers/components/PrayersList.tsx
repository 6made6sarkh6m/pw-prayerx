import React, {useEffect, useState, useMemo} from 'react';
import {Animated, Dimensions, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {IPrayer} from '../../../redux/ducks/prayers/types';
import {
  selectPrayersByColumnId,
  selectRequestStatus,
  selectErrormessage,
} from '../../../redux/ducks/prayers/selectors';
import {deletePrayer, getPrayers} from '../../../redux/ducks/prayers';
import PrayerItem from './PrayerItem';
import {AddPrayerForm, Loader, PrayerDeleteElement} from '../../ui';
import {CheckedPrayers} from '..';
export interface ISwipeData {
  direction: 'left' | 'right';
  isOpen: boolean;
  key: string;
  value: number;
}

interface IPrayersProps {
  columnId: number;
  withoutInput?: boolean;
}

export interface IPrayerItem {
  item: IPrayer;
}

const PrayersList = (props: IPrayersProps) => {
  const dispatch = useDispatch();
  const columnId = props.columnId;
  const [isAnimating, setIsAnimating] = useState(false);
  const prayers = useSelector(selectPrayersByColumnId(columnId));
  const requestStatus = useSelector(selectRequestStatus);
  const errorMessage = useSelector(selectErrormessage);

  const handleSwipeValueChange = (data: ISwipeData) => {
    const {key, value} = data;
    const transform = new Animated.Value(1);
    if (value < -Dimensions.get('window').width && !isAnimating) {
      setIsAnimating(true);
      Animated.timing(transform, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          setIsAnimating(false);
          dispatch({type: deletePrayer.type, prayerId: Number(key)});
        }
      });
    }
  };

  const uncheckedPrayers = useMemo(() => {
    return prayers.filter(item => !item.checked);
  }, [prayers]);

  useEffect(() => {
    dispatch({type: getPrayers.type});
  }, []);

  return requestStatus === 'pending' ? (
    <Loader isLoading={requestStatus === 'pending'} />
  ) : errorMessage ? (
    <Text>{errorMessage}</Text>
  ) : (
    <SwipeListView
      disableRightSwipe
      data={uncheckedPrayers}
      renderItem={(data: IPrayerItem) => <PrayerItem item={data} />}
      renderHiddenItem={() => <PrayerDeleteElement />}
      rightOpenValue={-Dimensions.get('window').width}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onSwipeValueChange={handleSwipeValueChange}
      useNativeDriver={true}
      keyExtractor={(item: IPrayer) => item.id.toString()}
      ListHeaderComponent={
        props.withoutInput ? null : <AddPrayerForm columnId={columnId} />
      }
      ListFooterComponent={
        prayers.filter(item => item.checked).length > 0 ? (
          <CheckedPrayers
            prayersData={prayers}
            onSwipeValueChange={handleSwipeValueChange}
            renderItem={(data: IPrayerItem) => <PrayerItem item={data} />}
            renderHiddenItem={() => <PrayerDeleteElement />}
          />
        ) : null
      }
    />
  );
};

export default PrayersList;
