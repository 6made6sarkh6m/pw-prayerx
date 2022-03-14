import React, {useState, useMemo} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {IPrayerItem} from './PrayersList';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../interfaces/navigator';
import {ROUTES} from '../../../navigation/UserNavigation/routes';
import {COLORS} from '../../../constants/colors';
import {updatePrayer} from '../../../redux/ducks/prayers';
import {PrayerIcon, UserIcon, CheckedIcon} from '../../ui/icons';
import {getCommentsByPrayerId} from '../../../redux/ducks/comments/selectors';

interface IPrayerItemProps {
  item: IPrayerItem;
}

type PrayerScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const PrayerItem = ({item}: IPrayerItemProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<PrayerScreenNavigationProp>();
  const [dataItem, setDataItem] = useState(item.item);
  const [checked, setChecked] = useState(dataItem.checked);
  const comments = useSelector(getCommentsByPrayerId(dataItem.id)).length;
  return (
    <StyledAnimatedView>
      <Row>
        <CheckBoxWrapper>
          <Line />
          <StyledBouncyCheckbox
            size={22}
            fillColor={COLORS.blindingWhite}
            unfillColor={COLORS.blindingWhite}
            isChecked={checked}
            disableText={true}
            ImageComponent={() => <CheckedIcon />}
            iconStyle={{
              borderColor: COLORS.coffeeGrey,
              borderRadius: 4,
            }}
            onPress={(isChecked?: boolean) => {
              setChecked(!checked);
              dispatch({
                type: updatePrayer.type,
                values: {
                  id: dataItem.id,
                  title: dataItem.title,
                  description: dataItem.description,
                  checked: isChecked,
                },
              });
            }}
          />
        </CheckBoxWrapper>
        <StyledPressable
          onPress={() =>
            navigation.navigate(ROUTES.PRAYER_DETAILS, {
              prayerId: dataItem.id,
            })
          }>
          <ContentWrapper>
            <Title checked={checked}>{dataItem.title}</Title>
            <IconsList>
              <Icon>
                <UserIcon />
                <IconText>{comments}</IconText>
              </Icon>
              <Icon>
                <PrayerIcon />
                <IconText>120</IconText>
              </Icon>
            </IconsList>
          </ContentWrapper>
        </StyledPressable>
      </Row>
    </StyledAnimatedView>
  );
};

const StyledAnimatedView = styled(Animated.View)`
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${COLORS.blindingWhite};
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.lightGrey};
`;

const CheckBoxWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Line = styled.View`
  width: 3px;
  height: 22px;
  background-color: ${COLORS.skyBlue};
`;

const StyledPressable = styled.Pressable`
  flex-grow: 1;
  height: 68px;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  height: 100%;
`;

const Title = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))<{checked: boolean}>`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
  width: 150px;
  margin-right: 15px;
  text-decoration-line: ${props => (props.checked ? 'line-through' : 'none')};
  text-decoration-style: solid;
`;

const IconsList = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled(IconsList)`
  margin-right: 15px;
  &:last-child {
    margin-right: 0;
  }
`;

const IconText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  margin-left: 5px;
  color: ${COLORS.coffeeGrey};
`;

const StyledBouncyCheckbox = styled(BouncyCheckbox)`
  margin-left: 15px;
`;

export default PrayerItem;
