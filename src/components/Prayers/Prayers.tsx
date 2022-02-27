import React, {useEffect, useState, useMemo} from 'react';
import {Animated, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import {IPrayer} from '../../redux/ducks/Prayers/types';
import {selectPrayersByColumnId} from '../../redux/ducks/Prayers/selectors';
import {deletePrayer, getPrayers} from '../../redux/ducks/Prayers';
import PrayerItem from './PrayerItem';
import {AddPrayerInput} from '../../components/ui/AddPrayerInput';
import {CheckedPrayers} from '.';
import {PrayerDeleteElement} from '../../components/ui/PrayerDeleteElement';
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

const Prayers = (props: IPrayersProps) => {
  const dispatch = useDispatch();
  const columnId = props.columnId;
  const [isAnimating, setIsAnimating] = useState(false);
  const prayers = useSelector(selectPrayersByColumnId(columnId));

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
          console.log(key);
          setIsAnimating(false);
          dispatch({type: deletePrayer.type, prayerId: Number(key)});
        }
      });
    }
  };

  const renderItem = (data: IPrayerItem) => <PrayerItem item={data} />;

  const renderHiddenItem = () => <PrayerDeleteElement />;

  useEffect(() => {
    dispatch({type: getPrayers.type});
  }, [dispatch]);

  return (
    <SwipeListView
      disableRightSwipe
      data={prayers.filter(item => !item.checked)}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-Dimensions.get('window').width}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onSwipeValueChange={handleSwipeValueChange}
      useNativeDriver={true}
      keyExtractor={(item: IPrayer) => item.id.toString()}
      ListHeaderComponent={
        props.withoutInput ? null : <AddPrayerInput columnId={columnId} />
      }
      ListFooterComponent={
        prayers.filter(item => item.checked).length > 0 ? (
          <CheckedPrayers
            prayersData={prayers}
            onSwipeValueChange={handleSwipeValueChange}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
          />
        ) : null
      }
    />
  );
};

export default Prayers;
