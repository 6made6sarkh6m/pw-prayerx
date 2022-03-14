import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {PrayerInfo, CommentsList} from '../../components';
import {RootStackParamList} from '../../interfaces/navigator';
import {
  AddIcon,
  GoBackIcon,
  PrayerIcon,
  UserIcon,
} from '../../components/ui/icons';
import {Pressable, Text, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
import {
  selectPrayerById,
  selectRequestStatus,
  selectErrormessage,
} from '../../redux/ducks/prayers/selectors';
import {AddCommentForm, Loader} from '../../components/ui';
import {getComments} from '../../redux/ducks/comments';

type PrayerDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PrayerDetails'
>;
type PrayerDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PrayerDetails'
>;
type NavProp = {
  navigation: PrayerDetailScreenNavigationProp;
  route: PrayerDetailScreenRouteProp;
};

const PrayerDetails = ({navigation, route}: NavProp) => {
  const dispatch = useDispatch();
  const {prayerId} = route.params;
  const prayerData = useSelector(selectPrayerById(prayerId));
  const requestStatus = useSelector(selectRequestStatus);
  const errorMessage = useSelector(selectErrormessage);
  useEffect(() => {
    dispatch({type: getComments.type});
  }, []);

  return (
    <Root>
      <Header>
        <HeaderTop>
          <Pressable onPress={() => navigation.goBack()}>
            <GoBackIcon fill={COLORS.blindingWhite} />
          </Pressable>
          <Pressable>
            <PrayerIcon fill={COLORS.blindingWhite} />
          </Pressable>
        </HeaderTop>
        <View>
          <Title>{prayerData?.title}</Title>
        </View>
      </Header>
      {requestStatus === 'pending' ? (
        <Loader isLoading={requestStatus === 'pending'} />
      ) : errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Container
          data={null}
          renderItem={info => null}
          ListHeaderComponent={
            <>
              <LastPrayedWrap>
                <Line />
                <LastPrayedText>Last prayed 8 min ago</LastPrayedText>
              </LastPrayedWrap>
              <PrayerInfo />
              <MembersWrapper>
                <SectionTitle>MEMBERS</SectionTitle>
                <MembersListContainer>
                  <AvatarContainer>
                    <UserIcon fill={COLORS.blindingWhite} />
                  </AvatarContainer>
                  <AvatarContainer>
                    <UserIcon fill={COLORS.blindingWhite} />
                  </AvatarContainer>
                  <AddMemberBtn>
                    <AddIcon
                      fill={COLORS.blindingWhite}
                      width={18}
                      height={18}
                    />
                  </AddMemberBtn>
                </MembersListContainer>
              </MembersWrapper>
            </>
          }
          ListFooterComponent={
            <>
              <CommentsTitle>COMMENTS</CommentsTitle>
              <CommentsList prayerId={prayerId} />
            </>
          }
        />
      )}

      <AddCommentForm prayerId={prayerId} />
    </Root>
  );
};

const Root = styled.View`
  display: flex;
  height: 100%;
  background-color: ${COLORS.blindingWhite};
`;

const Container = styled.FlatList`
  display: flex;
  background-color: ${COLORS.blindingWhite};
`;
const Header = styled.View`
  padding: 24px 15px;
  position: relative;
  min-height: 130px;
  display: flex;
  background-color: ${COLORS.warmBeige};
`;

const HeaderTop = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-size: 17px;
  line-height: 27px;
  color: ${COLORS.blindingWhite};
`;

const LastPrayedWrap = styled.View`
  padding: 14px 15px;
  display: flex;
  flex-direction: row;
`;

const LastPrayedText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: ${COLORS.coffeeGrey};
  margin-left: 10px;
`;

const SectionTitle = styled.Text`
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 15px;
  color: ${COLORS.skyBlue};
`;

const CommentsTitle = styled(SectionTitle)`
  padding-left: 15px;
`;

const MembersWrapper = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const MembersListContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background-color: ${COLORS.lightGrey};
  margin-left: 3px;
`;

const AddMemberBtn = styled.Pressable`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.warmBeige};
  border-radius: 100px;
  margin-left: 3px;
`;

const Line = styled.View`
  width: 3px;
  height: 22px;
  background-color: ${COLORS.warmBeige};
`;

export default PrayerDetails;
