export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Board: undefined;
  AddColumn: undefined;
  Column: {columnId: number};
  ColumnSettings: {columnId: number};
  Prayers: {columnId: number};
  PrayerDetails: {prayerId: number};
  SubscribedPrayers: {columnId: number};
};
